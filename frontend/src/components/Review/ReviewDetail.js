import {Link} from 'react-dom-router';

// import { useDispatch, useSelector } from 'react-redux';
// import { updateReview } from '../../store/';
// todo ——————————————————————————————————————————————————————————————————————————————————
// import { session } from '../../store/'; //* Session Boolean && 'updateReview()' method available
// todo ——————————————————————————————————————————————————————————————————————————————————

const ReviewDetail = ({ review }) => (
  <>
    <div className='review-user-info'>
      <div className='user-picture'> 
        <Link to={`/users/${review.guestId}`}/>
      </div>
      <div className='user-first-name'>{`Edison`}</div>
      <div className='review-date'>{`January 2022`}</div>
    </div>
    <div className='review-body'>{`Hello World`}</div>
  </>
)

export default ReviewDetail;