import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyForm from './PropertyForm';

function PropertyFormModal({name='Host New Property', edit=false, property=null, toggleDropdown=null}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    if (toggleDropdown) toggleDropdown(false);
    return setShowModal(false);
  }

  return (
    <>
      <button className={edit ? 'edit' : ''} onClick={e => setShowModal(true)}>{name}</button>
      {showModal && (
        <Modal onClose={closeModal}>
          <PropertyForm edit={edit} property={property} closeModal={closeModal}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


