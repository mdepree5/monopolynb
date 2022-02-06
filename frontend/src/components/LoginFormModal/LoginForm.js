import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {Form, FormInput} from '../Form';



const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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

  const DemoLogin = () => {
    const onClick = () => dispatch(sessionActions.demoLogin()).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  
    return (
      <button onClick={onClick}> 
        Demo Login
      </button>
    )
  }

return (
  <>
    <Form onSub={handleSubmit} errors={errors} buttonName={'Log In'} >
      <FormInput name='Username or Email' state={credential} setState={setCredential} />
      <FormInput name='Password' state={password} setState={setPassword} />
    </Form>
    <DemoLogin/>
  </>
)
}

export default LoginForm;
