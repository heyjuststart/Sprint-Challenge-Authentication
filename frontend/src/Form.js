import styled from 'styled-components';

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;

  input {
    padding: 5px;
    font-size: 1.8rem;
    width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;


