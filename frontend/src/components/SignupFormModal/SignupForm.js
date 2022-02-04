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
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };


}

export default SignupFormPage;

/* 
return (
  <form onSubmit={handleSubmit}>
    <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    </ul>
    <label>
      Username
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder='Username'
      />
    </label>
    <label>
      First Name
      <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        placeholder='First Name'
      />
    </label>
    <label>
      Last Name
      <input
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        placeholder='Last Name'
      />
    </label>
    <label>
      Email
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder='Email'
      />
    </label>
    <label>
      Password
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder='Password'
      />
    </label>
    <label>
      Confirm Password
      <input
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        placeholder='Confirm Password'
      />
    </label>
    <button type='submit'>Sign Up</button>
  </form>
);
 */