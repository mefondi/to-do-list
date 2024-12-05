import React from "react";
import postsState from '../store/postsState.js'
import modalState from '../store/modalState.js'

export default function ListItem({post}) {
    const {deletePosts, updatePosts} = postsState();
    const {setVisibleView, setViewPost, setWindowMode, setEditPost, setVisibleAdd} = modalState();

    const date = new Date(post.date)
    const viewPost = () =>{
        setViewPost(post)
        setVisibleView(true)
    }
    const deletePost = async (id) => {
      await deletePosts(id)
    };
    const editPost = () =>{
      setEditPost(post.title, post.description, post.status, post._id)
      setWindowMode('edit')
      setVisibleAdd(true)
    }
    const statusChange = async (status) =>{
      await updatePosts(
        post._id,
        post.title,
        post.description,
        status,
      );
    }

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
        <button className="btn btn-success" onClick={() => statusChange('Завершена')}>✔️</button>
      ):(
        <button className="btn btn-secondary" onClick={() => statusChange('Активна')}>⭕</button>
      )}
        <button className="btn btn-info ms-1" onClick={() => viewPost()}>🔎</button>
        <button className="btn btn-warning ms-1" onClick={() => editPost()}>🖌️</button>
        <button className="btn btn-danger ms-1" onClick={() => deletePost(post._id)}>❌</button>
      </td>
    </tr>
  );
}
