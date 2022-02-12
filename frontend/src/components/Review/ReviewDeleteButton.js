import {useParams, useHistory} from 'react-router-dom';
import * as reviewActions from "../../store/review";
import { useDispatch } from "react-redux";


const ReviewDeleteButton = ({reviewId}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {propertyId} = useParams();

  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedReview = await dispatch(reviewActions.deleteReview(reviewId));
    
    // console.log('review-delete-button', deletedReview);

    // if(deletedReview) history.push(`/properties`);
    // if(deletedReview) history.push(`/properties/${propertyId}`);
    return;
  }

  return (
    <button className='delete' onClick={handleDelete}>Delete Review</button>
  )
};

export default ReviewDeleteButton;
