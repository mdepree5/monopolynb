import { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getImagesByPropertyId } from '../../store/image';
import './Image.css';
// todo ——————————————————————————————————————————————————————————————————————————————————
const Image = ({propertyId}) => {
  const dispatch = useDispatch();
  const images = useSelector(state => state?.image?.listOfImages);

  useEffect(() => {dispatch(getImagesByPropertyId(propertyId))}, [dispatch]);

  return images.length > 0 ? (
    <ul className='image-container'>
      {images.map(image => (
        <>
          <ImageModal image={image} />
          {/* <li key={image?.imageURL}><img className='property-image' src={image?.imageURL} alt={`property-${image?.id}`}/></li> */}
        </>
      ))}
    </ul>
  ) : (
    <div className='image-container'>No images yet!</div>
  )
}


const ImageModal = ({image}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li 
        key={image?.imageURL}
        style={{cursor:'pointer'}}
        onClick={e => setShowModal(true)}
      >
        <img className='property-image' src={image?.imageURL} alt={`property-${image?.id}`}/>
      </li>

      {/* <button className={edit ? 'edit' : 'host-new-property'} onClick={e => setShowModal(true)}>{name}</button> */}
      {showModal && (
        <Modal image={true} onClose={() => setShowModal(false)}>
          <img className='property-image' src={image?.imageURL} alt={`property-${image?.id}`}/>
        </Modal>
      )}
    </>
  );
}


export default Image;