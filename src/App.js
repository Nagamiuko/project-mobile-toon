import React, { useEffect } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import SignupPage from './pages/SignupPage';
import { getBookList } from './redux/actions/bookApi';
import DetailsToonPage from './pages/DetailsToonPage';
function App() {
  useEffect(() => {
    Store.dispatch(getBookList());
  },[]);
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/BookPreview" element={<DetailsToonPage />} />
        </Routes>
      </ChakraProvider>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
