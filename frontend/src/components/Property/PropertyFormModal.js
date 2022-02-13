import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyCreateForm from './PropertyCreateForm';

function PropertyFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='create' onClick={e => {
      e.stopPropagation();
      setShowModal(true)
      }
      }>Host New Property</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyCreateForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


