import React, {useState, useEffect} from 'react';
import MOCKDATA from '../MOCK_DATA.json';
import {StyledWrapper} from './components/styled/wrapper.style';
import InputField from './components/InputField';
import DropDownMenu from './components/dropDownMenu';

const MainPage = () => {
  const [listNames, setListNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    const ArrayOfNames = MOCKDATA.map((name) => name.name);
    const removedNull = ArrayOfNames.filter((e) => e != null);
    setListNames(removedNull);
  }, []);

  const filteredNames = listNames.filter((name) => {
    if (selectedName == '') {
      return name;
    } else if (name.toLowerCase().includes(selectedName.toLowerCase())) {
      return name;
    }
  });

  return (
    <>
      <StyledWrapper>
        <InputField
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        />
        <DropDownMenu
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          filteredNames={filteredNames}
        />
      </StyledWrapper>
    </>
  );
};

export default MainPage;
