import React from 'react';
import { Typography } from '@material-ui/core';
import { Navbar } from './components/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Router';

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
