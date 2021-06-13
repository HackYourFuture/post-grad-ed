import styled from 'styled-components';

export const StyledInputField = styled.input`
  border: 1px solid ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.primary};
  width: 300px;
  height: 50px;
  border-radius: 3px;
  outline: none;
  padding-left: 34px;
  position: relative;
  letter-spacing: 1px;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.extraDark};
  }
  &:focus {
    box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  }
`;
