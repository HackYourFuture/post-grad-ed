import React from 'react';
import {StyledDropDownMenu, StyledOption} from './styled/dropDownMenu.style';

const DropDownMenu = ({selectedName, filteredNames, setSelectedName}) => {
  const handleOnMouse = (e) => {
    setSelectedName(e.target.value);
  };

  return (
    <>
      <StyledDropDownMenu>
        {selectedName && filteredNames.length === 0 ? (
          <p>Sorry there is not name </p>
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
