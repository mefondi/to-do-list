import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import modalState from "../store/modalState.js";
import postsState from "../store/postsState.js";

export default function AddTask() {
  const { visibleAdd, setVisibleAdd, windowMode, editPost} = modalState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addPosts, updatePosts } = postsState();

  useEffect(() => {
    if(windowMode === "add"){
      setTitle("")
      setDescription("")
    }else{
      setTitle(editPost.title)
      setDescription(editPost.description)
    }
  }, [windowMode]);

  const add = async () => {
    setVisibleAdd(false);
    setTitle("");
    setDescription("");
    await addPosts(title, description, Date.now());
  };

  const edit = async () => {
    setVisibleAdd(false);
    await updatePosts(
      editPost.id,
      title,
      description,
      editPost.status,
    );
  };

  return (
    <div onClick={() => setVisibleAdd(false)}>
      <Modal show={visibleAdd} onClick={(e) => e.stopPropagation()}>
        <Modal.Header>
          <Modal.Title>Задача</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mt-3"
            rows="10"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={windowMode === "add" ? add : edit}>
            {windowMode === "add" ? "Добавить" : "Редактировать"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
