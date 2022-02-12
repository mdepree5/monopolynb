import * as reviewActions from "../../store/review";
import { useDispatch } from "react-redux";


const ReviewDeleteButton = ({reviewId}) => {
  const dispatch = useDispatch();

  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedReview = await dispatch(reviewActions.deleteReview(reviewId));
    
    console.log('review-delete-button', deletedReview);

    return alert('deleted');
  }

  return (
    <button className='delete' onClick={handleDelete}>Delete Review</button>
  )
};

export default ReviewDeleteButton;
