import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css";

const Post = ({displayName, userName, verified, text, image, avatar}) => {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar src={avatar} />
      </div>
      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>
              {displayName}
            <span className='post--headerSpecial'>
              <VerifiedUser className="post--badge"/>
              @{userName}
            </span>
            </h3>
          </div>
          <div className='post--headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="画像"/>
          <div className='post--footer'>
            <ChatBubbleOutline fontSize="small"/>
            <Repeat fontSize="small"/>
            <FavoriteBorder fontSize="small"/>
            <PublishOutlined fontSize="small" />
          </div>
      </div>
    </div>
  )
}

export default Post
