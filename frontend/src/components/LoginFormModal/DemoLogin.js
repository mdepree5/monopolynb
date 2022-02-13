import { useDispatch } from 'react-redux';
import {demoLogin} from "../../store/session";

const DemoLogin = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(demoLogin())}>Demo Login</button>
  )
};

export default DemoLogin;