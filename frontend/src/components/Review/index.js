import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

// import ReviewList from './ReviewList';
// import ReviewData from './ReviewData';


const Reviews = ({property}) => {
  
  const dispatch = useDispatch();
  
  console.log('debugger');
  console.log(property);
  console.log('debugger');
  // const reviews = useSelector(state => state.reviews.listOfReviews)
  // console.log(reviews);

  // useEffect(() => {
  //   dispatch(getReviewsByPropertyId(property?.id));
  // }, [dispatch, property?.id]);

  return (
    <>
      <h3>Reviews</h3>
      {/* <ReviewData />
      <ReviewList propertyId={property.id}/> */}
    </>
  )
} 


// const Reviews = ({property}) => {
//   return (
//     <div>Reviews here!</div>
//   )
// }

export default Reviews;