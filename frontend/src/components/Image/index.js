import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getImagesByPropertyId } from '../../store/image';

import './Image.css';

const Image = ({propertyId}) => {
  const dispatch = useDispatch();

  const images = useSelector(state => state.image.listOfImages);

  console.log('images', images)

  useEffect(() => {
    dispatch(getImagesByPropertyId(propertyId));
  }, [dispatch]);

  return (
    <ul className='image-container'>
      {images.map(image => (
        <li key={image.id}><img className='property-image' src={image.imageURL} alt={`property-${image.id}`} /></li>
      ))}
    </ul>
  );
};

export default Image;