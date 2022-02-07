import Meter from '../../context/Meter';
import './Review.css';


const ReviewDataLine = ({datum}) => (
  <ul className='review-data-line' >
    <li>{datum.name}</li>
    <li><Meter rating={datum.rating}/></li>
    <li>{datum.rating}</li>
  </ul>
)

const ReviewData = () => {
  
  const reviewData = [
    {name: 'Cleanliness', rating: 5.0},
    {name: 'Communication', rating: 4.8},
    {name: 'Check-In', rating: 4.0},
  ];

  console.log(reviewData);
  
  return (    
    <div>
      <div>Rating</div>
      <div>
        {reviewData.map(datum => (
          <ReviewDataLine datum={datum}/>
        ))
        }
      </div>
    </div>
  )
}


export default ReviewData;