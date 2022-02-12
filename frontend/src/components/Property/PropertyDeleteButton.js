import {useHistory} from 'react-router-dom';
import * as propertyActions from "../../store/property";
import { useDispatch } from "react-redux";


const PropertyDeleteButton = ({propertyId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedProperty = await dispatch(propertyActions.deleteProperty(propertyId));

    console.log('delete-button', deletedProperty);

    // alert('deleted');
    history.push(`/confirmDelete`);
    return;
  }

  return (
    <button className='delete' onClick={handleDelete}>Delete Property</button>
  )
};

export default PropertyDeleteButton;
