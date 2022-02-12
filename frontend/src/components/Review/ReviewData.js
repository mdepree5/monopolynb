import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReviewFormModal from './ReviewFormModal';
import './Review.css';

const Meter = ({rating}) => (
  <div className='meter'>
    <meter id="meter"
    min="0" max='5'
    value={rating} />
  </div>
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
      <li>{datum.name}</li>
      {datum.value ? (
      <>
        <li><Meter rating={datum.value}/></li>
        <li>{datum.value}</li>
      </>
      ) : (
      <li>... no reviews yet!</li>
      )}
      
    </ul>
  );

  const ReviewSummary = ({reviewData}) => (
    <ul className='review-header' >
      {reviewData[0]?.value ? (
        <>
          <li><i className='review-star fas fa-star'/></li>
          <li>{`${reviewData[0]?.value} · ${totalReviews} reviews`} </li>
        </>
      ) : (
        <li>{`${totalReviews} reviews`}</li>
      )}
    </ul>
  )

  return (
    <div className='review-data-container'>
      <div>
        <ReviewSummary reviewData={reviewData}/>
        <div>
          {reviewData.slice(1).map(datum => (
            <ReviewDataLine key={datum.name} datum={datum}/>
          ))
          }
        </div>
      </div>
      <div>{!belongsToUser && ( <ReviewFormModal reviews={reviews}/>)}</div>
    </div>
  )
}

export default ReviewData;




// !!!! ——————————————————————————————————————————————————————————————————————————————————

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo               Based off custom GetReviewsById Backend Query
// todo ——————————————————————————————————————————————————————————————————————————————————
/* 
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
*/