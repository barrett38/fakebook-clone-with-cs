import React from "react";
import Post from "../../components/Posting/Post";
import CreatePost from "../../components/CreatePost/CreatePost";

function Feed() {
  const dummyPosts = [
    { username: "John Doe", content: "Hello world!" },
    { username: "Jane Smith", content: "React is awesome!" },
  ];

  return (
    <div>
      <CreatePost />
      {dummyPosts.map((post, idx) => (
        <Post key={idx} username={post.username} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
