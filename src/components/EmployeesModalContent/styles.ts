import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 24px;
  padding-bottom: 25px;
  border-bottom: 1px solid black; 
`;

export const ModalContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  label {
    font-size: 14px;
  }

  input {
    outline: none;
    width: 100%;
    padding: 8px 20px;
  }

  label+ input {
    margin: 10px 0;
  }
`;

export const ModalContentButtonContainer = styled.div`
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid black; 
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;