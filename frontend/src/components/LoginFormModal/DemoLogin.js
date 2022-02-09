import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";

const DemoLogin = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(sessionActions.demoLogin())}> 
      Demo Login
    </button>
  )
}

export default DemoLogin;