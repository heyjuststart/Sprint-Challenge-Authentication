import styled from 'styled-components';

export default styled.button`
  align-self: center;
  justify-self: center;
  margin-bottom: 10px;
  font-size: 1.8rem;
  padding: .5rem 2rem;
  border: 2px solid black;
  border-radius: 5px;
  background: black;
  color: white;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

