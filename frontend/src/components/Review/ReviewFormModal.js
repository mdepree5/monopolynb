import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewCreateForm from './ReviewCreateForm';

const ReviewFormModal = ({reviews, handleChange}) =>  {
  const [showModal, setShowModal] = useState(false);

  // console.log('MODAL', reviews);

  return (
    <>
      <button onClick={e => {
      e.stopPropagation();
      setShowModal(true)
      }
      }>Tell us about your stay</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm handleChange={handleChange} reviews={reviews} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;


