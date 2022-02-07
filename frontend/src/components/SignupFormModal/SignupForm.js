import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import {Form, FormInput} from '../Form';

function SignupFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]); 
      return dispatch(sessionActions.signup({ email, username, firstName, lastName, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Sign Up'} >
      <FormInput name='First Name' state={firstName} setState={setFirstName} />
      <FormInput name='Last Name' state={lastName} setState={setLastName} />
      <FormInput name='Username' state={username} setState={setUsername} />
      <FormInput name='Email' state={email} setState={setEmail} />
      <FormInput type='password' name='Password' state={password} setState={setPassword} />
      <FormInput type='password' name='Confirm Password' state={confirmPassword} setState={setConfirmPassword} />
    </Form>
  )
}

export default SignupFormPage;
