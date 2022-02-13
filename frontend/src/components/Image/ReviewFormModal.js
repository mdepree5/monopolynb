import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewCreateForm from './ReviewCreateForm';

const ReviewFormModal = ({reviews}) =>  {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={e => setShowModal(true)}>Tell us about your stay</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm reviews={reviews} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;


