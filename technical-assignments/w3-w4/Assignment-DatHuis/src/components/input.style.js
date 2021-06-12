import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: relative;
  width: 300px;
`;

const StyledInput = styled.input`
  font-size: 14px;
  width: 300px;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #bfc5cd;
  position: relative;

  &:hover {
    border: 1px solid #4a4a4a;
  }
`;

const TypeLabel = styled.label`
  position: absolute;
  pointer-events: none;

  left: 20px;
  top: 14px;
  display: none;
  color: #bfc5cd;

  ${StyledInput}:focus ~ & {
    display: block;
  }
`;
const Label = styled.label`
  position: absolute;
  pointer-events: none;

  left: 20px;
  top: 14px;
  transition: 0.3s ease all;
  color: #798697;

  ${StyledInput}:focus ~ & {
    top: -20px;
    left: 5px;
    font-size: 12px;
  }
`;
const ArrowLabel = styled.label`
  position: absolute;
  pointer-events: none;

  right: 20px;
  top: 14px;
  transition: 0.3s ease all;
  color: #798697;

  ${StyledInput}:focus ~ & {
    transform: rotateZ(-180deg);
  }
`;

const Input = () => {
  return (
    <Wrapper>
      <StyledInput />

      <Label>Contact</Label>
      <TypeLabel>
        <FontAwesomeIcon
          style={{color: 'blue', paddingRight: '3px', fontSize: '15px'}}
          icon={faSearch}
        />
        Type or search...{' '}
      </TypeLabel>
      <ArrowLabel onClick={() => console.log('heool')}>
        <FontAwesomeIcon
          style={{color: 'blue', paddingRight: '3px', fontSize: '15px'}}
          icon={faChevronDown}
        />
      </ArrowLabel>
    </Wrapper>
  );
};

export default Input;
