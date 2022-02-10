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

  const ReviewSummary = ({reviewData}) => (
    <ul>
      <li><i className='review-star fas fa-star'/></li>
      <li>{`${reviewData?.data[0]?.value} · ${reviewData.numberOfReviews} reviews`} </li>
    </ul>
  )

  return (
    <div className='review-data-container'>
      <ReviewSummary reviewData={reviewData}/>
      <div>
        {reviewData.data.slice(1).map(datum => (
          <ReviewDataLine key={datum.name} datum={datum}/>
        ))
        }
      </div>
    </div>
  )
}

export default ReviewData;