import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  h1 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #000;
      border-radius: 5px;
      outline: none;
    }
    button {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #000;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
  }
`;
