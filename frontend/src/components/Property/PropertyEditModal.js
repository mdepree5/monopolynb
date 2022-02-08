import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyEditForm from './PropertyEditForm';

function PropertyFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit your Property</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyEditForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


