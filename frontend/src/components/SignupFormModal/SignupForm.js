import { useState, useEffect } from 'react';
import {signup}  from '../../store/session';
import { useDispatch } from 'react-redux';
import {Form, FormInput} from '../Form';

function SignupFormPage({closeModal}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]); 
      await dispatch(signup({ email, username, firstName, lastName, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
      return closeModal();
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  useEffect(()=> {
    const errors = [];
    if(!email) errors.push('Please provide an email address.');
    if(username.length < 4 || username.length > 25) errors.push('Please provide a username between 4 and 25 characters.');
    if(firstName.length < 1 || firstName.length > 25) errors.push('Please provide a first name between 1 and 25 characters.');
    if(lastName.length < 1 || lastName.length > 25) errors.push('Please provide a last name between 1 and 25 characters.');
    if(password.length < 6) errors.push('Please provide a password with at least 6 characters.');
    if(password !== confirmPassword) errors.push('Passwords must match.');

    setValidationErrors(errors);
  }, [email, username, firstName, lastName, password, confirmPassword])


  return (
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Sign Up'} >
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
