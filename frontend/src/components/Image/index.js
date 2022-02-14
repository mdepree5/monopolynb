import { useEffect } from 'react';
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
        <li key={image?.imageURL}><img className='property-image' src={image?.imageURL} alt={`property-${image?.id}`}/></li>
      ))}
    </ul>
  ) : (
    <div className='image-container'>No images yet!</div>
  )
}

export default Image;