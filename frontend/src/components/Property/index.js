import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyForm from './PropertyForm';

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
    </>
  );
}

export default PropertyFormModal;


