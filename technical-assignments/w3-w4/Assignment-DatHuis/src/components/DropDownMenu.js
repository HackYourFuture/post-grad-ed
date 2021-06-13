import React from 'react';
import Message from './Message';
import {StyledDropDownMenu, StyledOption} from './styled/dropDownMenu.style';

const DropDownMenu = ({selectedName, filteredNames, setSelectedName}) => {
  const handleOnMouse = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <>
      <StyledDropDownMenu>
        {selectedName && filteredNames.length === 0 ? (
          <Message Message message='Opps, Name is not found.'></Message>
        ) : (
          filteredNames.map((name, index) => (
            <StyledOption key={index} onMouseDown={handleOnMouse} value={name}>
              {name}
            </StyledOption>
          ))
        )}
      </StyledDropDownMenu>
    </>
  );
};

export default DropDownMenu;
