import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyForm from './PropertyForm';

function PropertyFormModal({name='Host New Property', edit=false, property=null}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={edit ? 'edit' : ''} onClick={e => setShowModal(true)}>{name}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyForm edit={edit} property={property} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


