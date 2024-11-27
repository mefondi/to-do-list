import React from "react";
import postsState from '../store/postsState.js'
import modalState from '../store/modalState.js'

export default function ListItem({post}) {
    const deletePost = postsState((state) => state.deletePost);
    const {setVisibleView, setModalPost} = modalState();
    const date = new Date(post.date)
    const viewPost = () =>{
        setModalPost(post)
        setVisibleView(true)
    }

  return (
    <tr>
      <th scope="row">{date.getDate() +'.'+ date.getMonth() +'.'+ date.getFullYear()}</th>
      <td>{post.title.slice(0,50)}</td>
      <td>{post.status}</td>
      <td>
        <button className="btn btn-success">✔️</button>
        <button className="btn btn-info ms-1" onClick={() => viewPost()}>🔎</button>
        <button className="btn btn-warning ms-1">🖌️</button>
        <button className="btn btn-danger ms-1" onClick={() => deletePost(post.date)}>❌</button>
      </td>
    </tr>
  );
}
