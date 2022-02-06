import {Link} from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { updateReview } from '../../store/';
// todo ——————————————————————————————————————————————————————————————————————————————————
// import { session } from '../../store/'; //* Session Boolean && 'updateReview()' method available
// todo ——————————————————————————————————————————————————————————————————————————————————


const reviewDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

const ReviewDetail = ({ review }) => (
<li>
  <div className='review-user-info'>
    <div className='user-picture'> 
      <Link to={`/users/${review.guestId}`}/>
    </div>
    <div className='user-first-name'>{review.firstName}</div>
    <div className='review-date'>{reviewDate(review.updatedAt ? review.updatedAt : review.createdAt)}</div>
  </div>
  <div className='review-body'>{review.content}</div>
</li>
)
export default ReviewDetail;