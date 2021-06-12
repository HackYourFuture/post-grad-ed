import 'react-hot-loader';

import ReactDOM from 'react-dom';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import HotApp from './HotApp';
import GlobalStyle from './theme/globalStyles.style';
import Theme from './theme/theme.style';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <HotApp />
  </ThemeProvider>,
  document.getElementById('app')
);
