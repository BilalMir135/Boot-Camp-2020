import { useState } from 'react';

import { CREATE_USER_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const Form = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { firstName, lastName, email, password } = state;

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    createUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={firstName}
        onChange={handleChange}
      />

      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={lastName}
        onChange={handleChange}
      />

      <input type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />

      <input
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={handleChange}
      />
      <button onClick={addUser}>Create User</button>
    </div>
  );
};

export default Form;
