import React from 'react'
import Description from "../component/Description.jsx";
import List from "../component/List.jsx";
import Bar from "../component/Bar.jsx";
import AddTask from "../component/AddTask.jsx";
import ViewPost from "../component/ViewPost.jsx";

function Posts() {
  return (
    <div>
      <Description />
      <AddTask />
      <ViewPost />
      <Bar />
      <List/>
    </div>
  );
}

export default Posts;
