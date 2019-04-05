import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Form, FormActions, FormField } from './Form';
import Button from './Button';

export default withRouter(({ history }) => {
  const [info, setInfo] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleRegister = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:3300/api/register';
    axios
      .post(endpoint, info)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <Form onSubmit={handleRegister}>
      <h2>Register</h2>
      <FormField>
        <input
          id="username"
          name="username"
          value={info.username}
          onChange={handleInputChange}
          placeholder="username"
        />
      </FormField>
      <FormField>
        <input
          id="password"
          name="password"
          value={info.password}
          onChange={handleInputChange}
          placeholder="password"
          type="password"
        />
      </FormField>
      <FormActions>
        <Button type="submit">Register</Button>
      </FormActions>
    </Form>
  );
});
