import styled from 'styled-components';
import {StyledInputField} from './inputField.styles';

export const ContactLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.primary};
  color: ${(props) => props.theme.colors.dark};
  position: absolute;
  left: 34px;
  top: 16px;
  pointer-events: none;
  transition: 0.7s ease all;

  ${StyledInputField}:focus ~ & {
    color: ${(props) => props.theme.colors.extraDark};
    font-size: ${(props) => props.theme.fontSizes.small};
    top: -18px;
    left: 8px;
  }
  ${StyledInputField}:valid ~ & {
    color: ${(props) => props.theme.colors.extraDark};
    font-size: ${(props) => props.theme.fontSizes.small};
    top: -18px;
    left: 8px;
  }
`;

export const TypeLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.primary};
  color: ${(props) => props.theme.colors.light};
  position: absolute;
  left: 15px;
  top: 16px;
  pointer-events: none;
  display: none;

  ${StyledInputField}:focus ~ & {
    display: block;
  }
  ${StyledInputField}:valid ~ & {
    display: none;
  }
`;

export const ArrowLabel = styled.label`
  position: absolute;
  right: 20px;
  top: 16px;
  pointer-events: none;
  transition: 0.7s ease all;

  ${StyledInputField}:focus ~ & {
    transform: rotateZ(-180deg);
  }
`;
