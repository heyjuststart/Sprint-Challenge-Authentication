import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth';
import styled from 'styled-components';

const JokeList = styled.ul`
  font-size: 1.8rem;
  line-height: 3rem;
  li {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }

  h2 {
    font-size: 3rem;
  }
`;

export default requiresAuth(() => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const endpoint = '/jokes';

    axios.get(endpoint).then(res => {
      setJokes(res.data);
    });
  }, []);

  return (
    <>
      <JokeList>
        <h2>Joke List</h2>
        {jokes.map(j => (
          <li key={j.id}>{j.joke}</li>
        ))}
      </JokeList>
    </>
  );
});
