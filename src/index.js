import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

import {Provider} from "react-redux"
import  Store  from './redux/store';
import { AuthContextProvider } from './redux/actions/user';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={Store}>
    <AuthContextProvider>
      <StrictMode>
        <ColorModeScript />
        <App />
      </StrictMode>
    </AuthContextProvider>
  </Provider>
);

