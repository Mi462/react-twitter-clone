import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon'></Search>
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className='widgets--widgetContainer'>
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1664811587516116993"}/>

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='Shin_Engineer'
          options={{height:400}}
          />

          <TwitterShareButton
            url={"https://twitter.com/Shin_Engineer"}
            options={{text: "React.js勉強中", via: "Shin_Engineer"}}/>

      </div>
    </div>
  )
}

export default Widgets
