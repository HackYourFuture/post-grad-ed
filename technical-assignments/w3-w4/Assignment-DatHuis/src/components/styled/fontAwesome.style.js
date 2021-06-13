import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {keyframes} from 'styled-components';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

export const StyledSearchIcon = styled(FontAwesomeIcon)`
  color: #144766;
  font-size: ${(props) => props.theme.fontSizes.primary};
  margin-right: 5px;

  /* animation: ${rotate} 2s linear infinite; */
`;

export const StyledArrowDownIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 16px;
`;
