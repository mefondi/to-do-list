import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";

export default function AddTask() {
    const [modal, setModal] = useState(true);

    const connectHandler = () => {
        setModal(false);
      };
  return (
    <Modal show={modal} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" />
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
           <button variant="primary" onClick={() => connectHandler()}>
            Добавить
          </button>
        </Modal.Footer>
      </Modal>
  )
}