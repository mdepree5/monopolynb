import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignUpFormModal({toggleDropdown=null}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    return toggleDropdown(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={closeModal}>
          <SignupForm closeModal={closeModal}/>
        </Modal>
      )}  
    </>
  );
}

export default SignUpFormModal;