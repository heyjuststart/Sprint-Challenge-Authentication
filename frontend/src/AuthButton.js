import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from './Button';

export default withRouter(({ history }) =>
  localStorage.getItem('token') ? (
    <Button
      onClick={() => {
        localStorage.removeItem('token');
        history.push('/');
      }}
    >
      Sign Out
    </Button>
  ) : null
);
