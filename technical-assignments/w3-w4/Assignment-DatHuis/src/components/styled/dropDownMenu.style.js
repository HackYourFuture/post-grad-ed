import styled from 'styled-components';
import {StyledInputField} from './inputField.styles';

export const StyledDropDownMenu = styled.ul`
  border: 1px solid ${(props) => props.theme.colors.light};
  background-color: #ffffff;
  border-radius: 3px;
  margin-top: 5px;
  padding: 5px 0 5px 0;
  font-family: sans-serif;
  overflow-y: scroll;
  width: 300px;
  max-height: 195px;
  display: none;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(222, 226, 230, 0.3);
    background-color: #dee2e6;
  }
  &::-webkit-scrollbar {
    width: 16px;
    background-color: #dee2e6;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #144766;
  }

  ${StyledInputField}:focus ~ & {
    display: block;
  }
`;
export const StyledOption = styled.option`
  color: ${(props) => props.theme.colors.dark};
  line-height: 30px;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding-left: 15px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.extraDark};
    background-color: #f7f7f7;
  }
`;

export const StyledMessage = styled.p`
  color: ${(props) => props.theme.colors.extraDark};
  padding: 5px 0 5px 15px;
`;
