// import {Link} from 'react-router-dom';
// <div className='user-picture'> 
//           <Link to={`/users/${review.guestId}`}/>
//         </div>
{/* <div className='review-date'>{reviewDate(review.updatedAt ? review.updatedAt : review.createdAt)}</div> */}

// const reviewDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

const ReviewDetail = ({ review, belongsToUser }) => {
  
  console.log('review', review);

  return (
    <li className='review-detail'>
      <div className='review-user-info'>
        
        <div className='user-first-name'>{review.firstName}</div>
      </div>
      <div className='review-body'>{review.content}</div>
  
      {/* <div>
          {belongsToUser &&( 
            <>
              <PropertyEditModal property={property} />
              <PropertyDeleteButton propertyId={propertyId} />
            </>)
          }
      </div> */}
    </li>
  )
}

export default ReviewDetail;
