import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReviewFormModal from './ReviewFormModal';
import './Review.css';

const Meter = ({rating}) => (
  <meter id="meter" min="0" max='5' value={rating} />
)

const ReviewData = ({reviewData, totalReviews, reviews}) => {

  const {propertyId} = useParams();
  const [belongsToUser, setBelongsToUser] = useState(false);

  const property = useSelector(state => state.property[propertyId]);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {    
    if(sessionUser?.id === property?.hostId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, property])


  const ReviewDataLine = ({datum}) => (
    <ul className='review-data-line' >
      <li>{`${datum.name}:`}</li>
      {datum.value ? (
      <>
        <li><Meter rating={datum.value}/></li>
        <li>{datum.value}</li>
      </>
      ) : (
        <li> ... no reviews yet!</li>
      )}
    </ul>
  );

  const ReviewSummary = ({reviewData}) => (
    <div className='data-header' >
      {reviewData[0]?.value ? (
        <h2><i className='review-star fas fa-star'/>{`${reviewData[0]?.value} · ${totalReviews} reviews`} </h2>
      ) : (
        <div>No reviews yet!</div>
      )}
    </div>
  )

  return (
    <div className='review-data-container'>
      <ReviewSummary reviewData={reviewData}/>
      <div className='data-line-container'>
        {reviewData.slice(1).map(datum => (<ReviewDataLine key={datum.name} datum={datum}/>))}
      </div>
      {!belongsToUser && sessionUser && ( <ReviewFormModal reviews={reviews}/>)}
    </div>
  )
}

export default ReviewData;