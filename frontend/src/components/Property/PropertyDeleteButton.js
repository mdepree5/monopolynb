import {useHistory} from 'react-router-dom';
import * as propertyActions from "../../store/property";
import { useSelector, useDispatch } from "react-redux";


const PropertyDeleteButton = ({propertyId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);
  
  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedProperty = await dispatch(propertyActions.deleteProperty(propertyId));

    if(deletedProperty) return history.push(`/users/${sessionUser.id}`);
  }

  return (
    <button className='delete' onClick={handleDelete}>Delete Property</button>
  )
};

export default PropertyDeleteButton;
