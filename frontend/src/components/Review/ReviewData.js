import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
// ???? ——————————————————————————————————————————————————————————————————————————————————
import ReviewFormModal from './ReviewFormModal';
import './Review.css';
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Meter = ({rating}) => <meter id="meter" min="0" max='5' value={rating} />

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
    <div className='review-meter' >
      <strong>{`${datum.name}:`}</strong>
      {!datum.value ? <div>no reviews yet!</div> :
        <>
          <Meter rating={datum.value}/>
          <strong>{datum.value}</strong>
        </>
      }
    </div>
  );


  return (
    <div className='review-header'>
      {!reviewData[0]?.value ? <div>No reviews yet!</div> :
        <h2><i className='review-star fas fa-star'/>{`${reviewData[0]?.value} · ${totalReviews} reviews`} </h2>
      }

      <div className='review-meter-container'>
        {reviewData.slice(1).map(datum => (<ReviewDataLine key={datum.name} datum={datum}/>))}
      </div>
      {!belongsToUser && sessionUser && ( <ReviewFormModal reviews={reviews}/>)}
    </div>
  )
}

export default ReviewData;