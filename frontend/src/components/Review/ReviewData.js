// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                    TODO: Connect Review Data to backend
// todo ——————————————————————————————————————————————————————————————————————————————————

// import {useParams} from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllReviewDataByPropertyId } from '../../store/review';

import Meter from '../../context/Meter';
import './Review.css';


const ReviewDataLine = ({datum}) => (
  <ul className='review-data-line' >
    <li>{datum.name}</li>
    <li><Meter rating={datum.rating}/></li>
    <li>{datum.rating}</li>
  </ul>
);

const ReviewData = () => {
  // const dispatch = useDispatch();
  // const {propertyId} = useParams();

  // const reviews = useSelector(state => state.review);
  
  // console.log('debugger');
  // console.log('reviews', reviews);


  // useEffect(() => {
  //   dispatch(getAllReviewDataByPropertyId(propertyId));
  // }, [dispatch, propertyId]);

  const reviewData = [
    {name: 'Cleanliness', rating: 5.0},
    {name: 'Communication', rating: 4.8},
    {name: 'Check-In', rating: 4.0},
  ];
  
  return (    
    <div className='review-data-container'>
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