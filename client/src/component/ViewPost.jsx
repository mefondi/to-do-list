import React from 'react'
import Modal from "react-bootstrap/Modal";
import modalState from '../store/modalState.js'

export default function ViewPost() {
    const {modalPost, visibleView, setVisibleView} = modalState();
    const date = new Date(modalPost.date)
  return (
    <div onClick={() => setVisibleView(false)}>
      <Modal show={visibleView} onClick={(e) => e.stopPropagation()}>
          <Modal.Header>
            <Modal.Title>Задача</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{modalPost.title}</h3>
            <p>{modalPost.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <p className="small mb-0 me-2 text-muted">{'Статус: '+ modalPost.status}</p>
            <p className="small mb-0 me-2 text-muted">{' Дата: '+ date.getDate() +'.'+ date.getMonth() +'.'+ date.getFullYear()}</p>
          </Modal.Footer>
      </Modal>
    </div>
  )
}