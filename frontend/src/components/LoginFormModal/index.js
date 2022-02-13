import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
// todo ——————————————————————————————————————————————————————————————————————————————————

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={e => {
        e.stopPropagation();
        setShowModal(true)
      }
      }>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;