import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyEditForm from './PropertyEditForm';

const PropertyFormModal = ({property}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit your Property</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyEditForm closeModal={() => setShowModal(false)} property={property}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


