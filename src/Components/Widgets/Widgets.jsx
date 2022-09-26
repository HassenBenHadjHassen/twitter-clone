import React from 'react';
import "./Widgets.css";

/* Icons */
import SearchIcon from '@mui/icons-material/Search';

/* Components */
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
            <SearchIcon className='widgets__searchIcon' />
            <input type="text" placeholder='Search Twitter' />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's Happening</h2>

          <TwitterTweetEmbed tweetId={"1573846653320192002"} />

          <TwitterTimelineEmbed sourceType='profile' screenName='freeCodeCamp' options={{height: 400}} />

          <br />
          
          <TwitterShareButton url={"https://github.com/HassenBenHadjHassen/"} options={{text: "Check out this GitHub account!"}} />
        </div>
    </div>
  )
}

export default Widgets