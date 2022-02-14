import ReviewData from './ReviewData';
import ReviewList from './ReviewList';
import './Review.css';


const Review = ({reviews}) => {
  const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;
  
  const reviewData = [
    {name: 'Rating', value: +avg(reviews, 'rating').toFixed(2)},
    {name: 'Communication', value: +avg(reviews, 'communication').toFixed(2)},
    {name: 'Check-in', value: +avg(reviews, 'checkIn').toFixed(2)},
    {name: 'Cleanliness', value: +avg(reviews, 'cleanliness').toFixed(2)},
  ]

  return (
    <div >
      <ReviewData reviews={reviews} reviewData={reviewData} totalReviews={reviews?.length}/>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Review;