

// import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';

const ReviewDetail = ({review, belongsToUser}) => {
  const date = review.createdAt
  return (
  <ul className='review-detail'>
      <li>
        <ul className='review-nav'>
          <li>{date}</li>
          <li>{belongsToUser && (<ReviewDeleteButton reviewId={review.id} />)}</li>
        </ul>
      </li>
      <li className='review-body'>{review.content}</li>
  </ul>
)
}

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
