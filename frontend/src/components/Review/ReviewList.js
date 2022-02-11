// const reviewDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

// import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';

const ReviewDetail = ({review, belongsToUser}) => (
  <ul className='review-detail'>
      <li><ul className='review-nav'>
        <li>User2 January 23</li>
        <li className='review-edit-delete'>
      {belongsToUser &&( 
        <>
          {/* <ReviewEditModal review={review} /> */}
          <ReviewDeleteButton reviewId={review.id} />
        </>)
      }
    </li>
      </ul></li>
      <li className='review-body'>{review.content}</li>
  </ul>
)

const ReviewList = ({reviews, belongsToUser}) => (

  <ul className='review-list-container'>
    {reviews.map(review => (
      <li key={review.id}> 
        <ReviewDetail review={review} belongsToUser={belongsToUser}/>
      </li>
    ))}
  </ul>
)

export default ReviewList;
