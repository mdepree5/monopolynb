import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewCreateForm from './ReviewCreateForm';

function PropertyFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={e => {
      e.stopPropagation();
      setShowModal(true)
      }
      }>Tell us about your stay</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


