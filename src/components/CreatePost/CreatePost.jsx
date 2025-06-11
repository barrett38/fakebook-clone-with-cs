import React, { useState } from "react";

function CreatePost() {
  const [content, setContent] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    // Send post to backend here
    console.log("New Post:", content);
    setContent("");
  };

  return (
    <form onSubmit={submitPost}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
