import React, { useState, useEffect } from 'react'
import "./Feed.css"
/* Components */
import TweetBox from "./TweetBox";
import Post from './Post';
import db from "../../Firebase"
import FlipMove from "react-flip-move";

function Feed() {

  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("Posts").onSnapshot(snapshot => 
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);

  

  return (
    <div className='feed'>
        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        {/* Tweet Box */}
        <TweetBox />
        {/* Post */}
        
        <FlipMove>
          {posts.map(post => (
            <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
            />
          ))}
        </FlipMove>
    </div>
  )
}

export default Feed;