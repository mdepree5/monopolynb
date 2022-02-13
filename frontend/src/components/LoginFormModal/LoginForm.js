import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {Form, FormInput} from '../Form';



const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
