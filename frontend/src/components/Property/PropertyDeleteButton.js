import {useHistory} from 'react-router-dom';
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";


const PropertyDeleteButton = ({propertyId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const hostId = useSelector(state => state.session.user.id);

  // console.log('debugger-delete-button-component');
  // console.log('propertyId', propertyId);

  const handleDelete = async(event) => {
    event.preventDefault();

    const deletedProperty = await dispatch(propertyActions.deleteProperty(propertyId));

    console.log('deletedProperty:', deletedProperty);

    alert('deleted');
    history.push(`/confirmDelete`);
  }

  return (
    <button onClick={handleDelete}>Delete Property</button>
  )
};

export default PropertyDeleteButton;
