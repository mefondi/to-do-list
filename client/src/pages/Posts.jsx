import React from 'react'
import Description from "../component/Description.jsx";
import List from "../component/List.jsx";
import Bar from "../component/Bar.jsx";
import AddTask from "../component/AddTask.jsx";
import ViewPost from "../component/ViewPost.jsx";
import loginState from '../store/loginState.js'

function Posts() {
  const user = loginState((state) => state.user); 

  if (!user.isActivated) {
    return<h1 className="text-center mb-4 mt-4">Подтвердите почту</h1>
  }

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
