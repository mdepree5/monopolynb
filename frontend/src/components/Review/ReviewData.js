import Meter from '../../context/Meter';
import './Review.css';


const ReviewData = ({reviewData}) => {
  
  const ReviewDataLine = ({datum}) => (
    <ul className='review-data-line' >
      <li>{datum.name}</li>
      <li><Meter rating={datum.value}/></li>
      <li>{datum.value}</li>
    </ul>
  );

  return (    
    <div className='review-data-container'>
      <div>Rating</div>
      <div>
        {reviewData.map(datum => (
          <ReviewDataLine key={datum.name} datum={datum}/>
        ))
        }
      </div>
    </div>
  )
}

export default ReviewData;