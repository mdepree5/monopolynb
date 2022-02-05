import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {Form, FormInput} from '../Form';



const DemoLogin = () => {
  return (
    <div>Hello</div>
  )
}


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

return (
  <>
    <Form onSub={handleSubmit} errors={errors} buttonName={'Log In'} >
      <FormInput name='Username or Email' state={credential} setState={setCredential} />
      <FormInput name='Password' state={password} setState={setPassword} />
    </Form>
    <DemoLogin onSub={()=> dispatch(sessionActions.demoLogin())}/>
  </>
)
}

export default LoginForm;
