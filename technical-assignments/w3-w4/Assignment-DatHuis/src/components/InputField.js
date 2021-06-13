import React from 'react';
import {StyledInputField} from './styled/inputField.styles';
import {TypeLabel, ContactLabel, ArrowLabel} from './styled/labels.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const InputField = ({selectedName, setSelectedName}) => {
  const handleChange = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <>
      <StyledInputField
        value={selectedName}
        onKeyUp={handleChange}
        onChange={handleChange}
        required
      />

      <ContactLabel>Contact</ContactLabel>
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
    </>
  );
};

export default InputField;
