import {deleteReview} from "../../store/review";
import { useDispatch } from "react-redux";

const ReviewDeleteButton = ({reviewId}) => {
  const dispatch = useDispatch();
  const handleDelete = async () => await dispatch(deleteReview(reviewId));

  return (
    <button className='delete' onClick={handleDelete}>Delete Review</button>
  )
};

export default ReviewDeleteButton;
