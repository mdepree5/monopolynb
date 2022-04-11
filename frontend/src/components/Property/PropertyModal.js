import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PropertyForm from './PropertyForm';

function PropertyFormModal({name='Host New Property', edit=false, channel=null}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='host-new-property' onClick={e => setShowModal(true)}>{name}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PropertyForm edit={edit} channel={channel} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default PropertyFormModal;


