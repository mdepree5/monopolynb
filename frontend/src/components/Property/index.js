import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyForm from './PropertyForm';
import Review from '../Review';

function PropertyFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Host new property</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyForm />
        </Modal>
      )}
      <Review />
    </>
  );
}

export default PropertyFormModal;


