import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import modalState from '../store/modalState.js'
import postsState from '../store/postsState.js'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {visibleAdd, setVisibleAdd} = modalState();
  const addPosts = postsState((state) => state.addPosts);

    const connectHandler = () => {
      setVisibleAdd(false);
      setTitle('')
      setDescription('')
      addPosts({title, description, date:Date.now(), status:'Активна'})
    };

  return (
    <div onClick={() => setVisibleAdd(false)}>
      <Modal show={visibleAdd} onClick={(e) => e.stopPropagation()}>
          <Modal.Header>
            <Modal.Title>Задача</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea className='form-control mt-3' rows='10' type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <button variant="primary" onClick={() => connectHandler()}>
              Добавить
            </button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}