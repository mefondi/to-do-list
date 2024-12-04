import React from "react";
import postsState from '../store/postsState.js'
import modalState from '../store/modalState.js'

export default function ListItem({post, index}) {
    const deletePosts = postsState((state) => state.deletePosts);
    const {setVisibleView, setModalPost} = modalState();
    const date = new Date(post.date)
    const viewPost = () =>{
        setModalPost(post)
        setVisibleView(true)
    }
    const deletePost = async (id) => {
      await deletePosts(id)
    };

  return (
    <tr>
      <th scope="row">{date.getDate() +'.'+ date.getMonth() +'.'+ date.getFullYear()}</th>
      <td>{post.title.slice(0,40)}</td>
      
      <td>{post.status === 'Активна'?(
        <p className="text-success">{post.status}</p>
      ):(
        <p>{post.status}</p>
      )}</td>

      <td>{post.status === 'Активна'?(
        <button className="btn btn-success">✔️</button>
      ):(
        <button className="btn btn-secondary">⭕</button>
      )}
        <button className="btn btn-info ms-1" onClick={() => viewPost()}>🔎</button>
        <button className="btn btn-warning ms-1">🖌️</button>
        <button className="btn btn-danger ms-1" onClick={() => deletePost(post._id)}>❌</button>
      </td>
    </tr>
  );
}
