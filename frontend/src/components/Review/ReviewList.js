// const reviewDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

// import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';

const ReviewDetail = ({review, belongsToUser}) => {
  const month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ][+review.createdAt.split('-')[1]-1];

  const year = review.createdAt.split('-')[0];

  return (
  <ul className='review-detail'>
      <li>
        <ul className='review-nav'>
          <li>{`${month} ${year}`}</li>
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
