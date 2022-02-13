import {useHistory} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// todo ——————————————————————————————————————————————————————————————————————————————————
import * as sessionActions from "../../store/session";
import {Form, FormInput} from '../Form';
// todo ——————————————————————————————————————————————————————————————————————————————————

const LoginForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors([]);
    
    const successfulLogin = await dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    
    if(successfulLogin) history.push(`/users/${successfulLogin.id}`);
    return closeModal();
  };

  useEffect(()=> {
    const errors = [];
    if(!credential) errors.push('Please provide a valid email or username.'); 
    if(!password) errors.push('Please provide a password.');

    setValidationErrors(errors);
  }, [credential, password])


return (
  <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Log In'} >
    <FormInput name='Username or Email' state={credential} setState={setCredential} />
    <FormInput type='password' name='Password' state={password} setState={setPassword} />
  </Form>
)
}

export default LoginForm;
