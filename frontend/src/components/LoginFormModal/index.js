import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
// todo ——————————————————————————————————————————————————————————————————————————————————

function LoginFormModal({toggleDropdown=null}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    return toggleDropdown(false);
  }

  return (
    <>
      <button onClick={e => {
        e.stopPropagation();
        setShowModal(true)
      }
      }>Log In</button>
      {showModal && (
        <Modal onClose={closeModal}>
          <LoginForm closeModal={closeModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;