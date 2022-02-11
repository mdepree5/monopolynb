// const reviewDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;


const ReviewDetail = ({review, belongsToUser}) => (
  <ul className='review-detail'>
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
    <li className='review-edit-delete'>
      {belongsToUser &&( 
        <>
          <ReviewEditFormModal review={review} />
          <ReviewDeleteButton reviewId={reviewId} />
        </>)
      }
    </li>
  </ul>
)

export default ReviewList;



/* 

*/
