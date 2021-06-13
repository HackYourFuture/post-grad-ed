import styled from 'styled-components';
import {StyledInputField} from './inputField.styles';

export const StyledDropDownMenu = styled.ul`
  position: absolute;
  background-color: white;
  border: 3px solid gray;
  border-radius: 0 0 5px 5px;
  font-family: sans-serif;
  width: 300px;
  padding: 5px;
  overflow-y: scroll;
  max-height: 185px;
  margin-top: 20px;
  display: none;

  ${StyledInputField}:focus ~ & {
    display: block;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 15px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
  }
`;
export const StyledOption = styled.option`
  background-color: gray;
  padding: 4px;
  color: blue;
  margin-bottom: 1px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;
