import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyCreateForm from './PropertyCreateForm';

function PropertyFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Host new property</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyCreateForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


