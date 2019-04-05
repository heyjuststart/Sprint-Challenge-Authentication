import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

import { Form, FormActions, FormField } from './Form';
import Button from './Button';

export default props => {
  const [info, setInfo] = useState({ username: '', password: '' });
  const [redirectReferrer, setRedirectReferrer] = useState(false);
  const { from, message } = props.location.state || { from: { pathname: '/' } };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleLogin = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:3300/api/login';
    axios
      .post(endpoint, info)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setRedirectReferrer(true);
      })
      .catch(err => console.error(err));
  };

  if (redirectReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <Form onSubmit={handleLogin}>
      <h2>{message || 'Login'}</h2>
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
        <Button type="submit">Login</Button>
        <Link to="/register">Register</Link>
      </FormActions>
    </Form>
  );
};
