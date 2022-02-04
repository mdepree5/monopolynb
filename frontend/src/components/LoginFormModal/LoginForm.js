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

return (
  <Form onSub={handleSubmit} errors={errors} buttonName={'Log In'} >
    <FormInput name='Username or Email' state={credential} setState={setCredential} />
    <FormInput name='Password' state={password} setState={setPassword} />
  </Form>
)
}

export default LoginForm;


/* 
return ( 
  <form onSubmit={handleSubmit}>
    <ul>
      {errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ))}
    </ul>
    <label>
      Username or Email
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
    </label>
    <label>
      Password
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </label>
    <button type="submit">Log In</button>
  </form>
); 
*/