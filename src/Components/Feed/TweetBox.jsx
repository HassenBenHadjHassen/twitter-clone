import React, { useState } from 'react'
import "./TweetBox.css"

/* Components */
import { Button, Avatar } from '@mui/material';
import db from '../../Firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  function submit(event) {
    event.preventDefault();

    db.collection("Posts").add({
      displayName: "Hassen",
      avatar: "https://hassenbenhadjhassen.github.io/CV/data/Nice_Photo.png",
      image: tweetImage,
      text: tweetMessage,
      username: 'Razills',
      verified: false
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form action="">
            <div className='tweetBox__input'>
                <Avatar src="https://hassenbenhadjhassen.github.io/CV/data/Nice_Photo.png" />
                <input onChange={event => setTweetMessage(event.target.value)} type="text" placeholder="What's happening?" value={tweetMessage} />
            </div>

            <input onChange={event => setTweetImage(event.target.value)} className='tweetBox__imageInput' type="text" placeholder="Enter image URL" value={tweetImage} />

            <Button onClick={submit} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox;