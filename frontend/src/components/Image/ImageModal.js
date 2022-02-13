import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

const ImageModal = ({image}) =>  {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={e => setShowModal(true)}>Tell us about your stay</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <li>{image.imageURL}</li>
        </Modal>
      )}
    </>
  );
}

export default ImageModal;


