import { ChakraBaseProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript />
      <ColorModeSwitcher />
      <App />
    </ChakraBaseProvider>
  </StrictMode>
);
