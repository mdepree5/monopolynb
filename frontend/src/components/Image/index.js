import './Image.css';

const Image = ({images}) => (
  <ul className='image-container'>
    {images.map(image => (
      <li key={image.imageURL}><img className='property-image' src={image.imageURL} alt={`property-${image.id}`}/></li>
    ))}
  </ul>
);

export default Image;