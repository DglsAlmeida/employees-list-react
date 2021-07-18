import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 0;
  padding: 12px 20px;
  width: 100px;
  border-radius: 5px;
  font-size: 16px;
  background: ${props => props.color};
  transition: filter 0.2s;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }

  & + button {
    margin-left: 10px;
  }
`;