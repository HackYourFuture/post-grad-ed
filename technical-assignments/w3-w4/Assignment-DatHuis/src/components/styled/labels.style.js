import styled from 'styled-components';
import {StyledInputField} from './inputField.styles';

export const TypeLabel = styled.label`
  position: absolute;
  pointer-events: none;

  left: 20px;
  top: 14px;
  display: none;
  color: #bfc5cd;

  ${StyledInputField}:focus ~ & {
    display: block;
  }
  ${StyledInputField}:valid ~ & {
    display: none;
  }
`;
export const ContactLabel = styled.label`
  position: absolute;
  pointer-events: none;

  left: 20px;
  top: 14px;
  transition: 0.3s ease all;
  color: #798697;

  ${StyledInputField}:focus ~ & {
    top: -20px;
    left: 5px;
    font-size: 12px;
  }
  ${StyledInputField}:valid ~ & {
    top: -20px;
    left: 5px;
    font-size: 12px;
  }
`;

export const ArrowLabel = styled.label`
  position: absolute;
  pointer-events: none;

  right: 20px;
  top: 14px;
  transition: 0.3s ease all;
  color: #798697;

  ${StyledInputField}:focus ~ & {
    transform: rotateZ(-180deg);
  }
`;
