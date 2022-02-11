import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewEditForm from './ReviewEditForm';

function ReviewFormModal({review}) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit your Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewEditForm closeModal={() => setShowModal(false)} review={review} />
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;


