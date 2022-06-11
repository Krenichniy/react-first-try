import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post name"></input>
        <input type="text" placeholder="Post description"></input>
        <button>Add new post</button>
      </form>
      <PostList posts={posts} title={"Js Posts list 1"} />
    </div>
  );
}

export default App;
