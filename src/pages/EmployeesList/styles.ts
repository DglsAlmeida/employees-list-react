import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  margin: 50px auto;

  button {
    margin-right: auto;
  }
`;

export const EmployeesTitle = styled.h1``;

export const EmployeesButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 40px;
`;

export const EmployeesButton = styled.button`
  border: 0;
  background: #226CE0;
  color: #FFF;
  padding: 12px 14px;
  border-radius: 4px;
  font-size: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

`;

export const EmployeesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;

  table {
    border-collapse: collapse;
    width: 80%;
    text-align: left;
  
    tbody > tr:nth-child(odd) {
      background: #DCDCDC	;
    }

    th, td {
      border: 0.5px solid #A1A6B4;
      width: 300px;
    }

    th {
      padding: 12px 20px;
    }

    td {
      padding: 14px 20px;
    }

    td:last-child {
      width: 500px;
    }

    div {
      display: flex;
      /* width: 100%; */
      align-items: center;
      justify-content: center;
    }

    button {
      border: 0;
      padding: 12px 20px;
      width: 100px;
      border-radius: 5px;
      font-size: 16px;
      transition: filter 0.2s;
      color: #fff;

      &:hover {
        filter: brightness(0.9);
      }
    }

    button:nth-of-type(1) {
      background: #32CD32;
    }

    button:nth-of-type(2) {
      background: red;
    }

    button:nth-of-type(3) {
      background: aquamarine;
    }

    button + button {
      margin-left: 10px;
    }
  }
`;