import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewCreateForm from './ReviewCreateForm';

function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={e => {
      e.stopPropagation();
      setShowModal(true)
      }
      }>Create Review</button>
      {/* Tell us about your stay */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;


