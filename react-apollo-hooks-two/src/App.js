import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetAllPosts from "./components/posts/GetAllPosts";
import CreatePost from "./components/posts/CreatePost";
import UpdatePost from "./components/posts/UpdatePost";
import DeletePost from "./components/posts/DeletePost";
import Counter from "./components/posts/Counter";
import FetchLocalData from "./components/posts/FetchLocalData";
import Parent from "./components/posts/Parent";

function App() {
  return (
    <div className="App">
      <Parent />
      {/* <Counter /> */}
       {/* <DeletePost />
      <UpdatePost />
      <CreatePost /> */}
      {/* <GetAllPosts /> */}
      {/* <FetchLocalData /> */}
    </div>
  );
}

export default App;
