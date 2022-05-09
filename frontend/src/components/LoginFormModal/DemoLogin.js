import { useDispatch } from 'react-redux';
import {demoLogin} from "../../store/session";

const DemoLogin = ({toggleDropdown=null}) => {
  const dispatch = useDispatch();

  const handleDemo = () => {
    toggleDropdown(false);
    dispatch(demoLogin());
  }

  return (
    <button className='demo-login' onClick={handleDemo}>Demo Login</button>
  )
};

export default DemoLogin;