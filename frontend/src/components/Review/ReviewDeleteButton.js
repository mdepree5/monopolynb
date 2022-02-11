import * as reviewActions from "../../store/review";
import { useDispatch } from "react-redux";


const ReviewDeleteButton = ({reviewId}) => {
  console.log('reviewId', reviewId);

  const dispatch = useDispatch();

  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedReview = await dispatch(reviewActions.deleteReview(reviewId));

    console.log('deletedReview:', deletedReview);

    alert('deleted');
  }

  return (
    <button onClick={handleDelete}>Delete Review</button>
  )
};

export default ReviewDeleteButton;
