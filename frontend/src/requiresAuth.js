import React from 'react';
import axios from 'axios';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.baseURL = 'http://localhost:3300/api';
  config.headers.authorization = token;
  return config;
});

export default Component => props =>
  localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <h3>Please log in</h3>
  );
