import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import MOCKDATA from '../MOCK_DATA.json';
// import Input from './components/input.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const AppContainer = styled.div`
  padding: 10%;
  background-color: white;
  width: 100%;
  height: 100vh;
  position: relative;
`;

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
  padding-left: 29px;
  color: #4a4a4a;
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
  ${StyledInput}:valid ~ & {
    display: none;
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
  ${StyledInput}:valid ~ & {
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

const DropDown = styled.ul`
  position: absolute;
  background-color: white;
  border: 1px solid blue;
  border-radius: 0 0 5px 5px;
  border-top: none;
  font-family: sans-serif;
  width: 350px;
  padding: 5px;
  overflow-y: scroll;
  height: 200px;
  margin-top: 20px;
  display: none;
  ${StyledInput}:focus ~ & {
    display: block;
  }
`;
const StyledOption = styled.option`
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

const App = () => {
  const [listNames, setListNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  console.log(selectedName);
  const names = listNames.map((name) => name.name);
  console.log(names);

  useEffect(() => {
    setListNames(MOCKDATA);
  }, []);

  return (
    <AppContainer>
      <Wrapper>
        <StyledInput
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          required
        />

        <Label>Contact</Label>
        <TypeLabel>
          <FontAwesomeIcon
            style={{color: 'blue', paddingRight: '3px', fontSize: '15px'}}
            icon={faSearch}
          />
          Type or search...
        </TypeLabel>
        <ArrowLabel>
          <FontAwesomeIcon style={{fontSize: '15px'}} icon={faChevronDown} />
        </ArrowLabel>
        <DropDown onSelect={(e) => setSelectedName(e.target.value)}>
          {names.map((name, index) => (
            <StyledOption
              key={index}
              onMouseDown={(e) => setSelectedName(e.target.value)}
              value={name}
            >
              {name}
            </StyledOption>
          ))}
        </DropDown>
      </Wrapper>

      {/* <div>
        Have a look at the readme.md file for what is expected. And as always:
        questions are welcome!
      </div> */}
    </AppContainer>
  );
};

export default App;
