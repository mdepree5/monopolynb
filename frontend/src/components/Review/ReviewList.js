import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';
import ReviewDetail from './ReviewDetail';

// const ReviewList = ({reviews}) => {

//   return (
//     <div className='container-of-reviews'>
//       <ul>
//         {reviews.map(review => (
//           <ReviewDetail
//             key={review.id}
//             id={`review-${review.id}`}
//             title={review.title}
//             review={review}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default ReviewList;
