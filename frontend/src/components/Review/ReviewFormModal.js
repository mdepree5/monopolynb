import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewCreateForm from './ReviewCreateForm';

const ReviewFormModal = ({reviews}) =>  {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='new-review-button' className='create' onClick={e => setShowModal(true)}>Write a Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreateForm reviews={reviews} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;


