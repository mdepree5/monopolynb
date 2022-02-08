import {useHistory} from 'react-router-dom';
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";


const PropertyDeleteButton = ({propertyId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const hostId = useSelector(state => state.session.user.id);


  const handleDelete = async(event) => {
    event.preventDefault();

    await dispatch(propertyActions.deleteProperty(propertyId))

    history.push(`/properties/confirmDelete`);
  }

  return (
    <button onClick={handleDelete}>Delete Property</button>
  )
};

export default PropertyDeleteButton;
