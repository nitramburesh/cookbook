import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from './Routes';
import { AppLayout } from './pages/AppLayout';
import './App.css';
import styles from './components/Modules/ToastContainer.module.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes />
        <ToastContainer
          autoClose={5000}
          position={'bottom-left'}
          closeButton={false}
          toastClassName={styles.toast}
          hideProgressBar={'true'}
        />
      </AppLayout>
    </Router>
  );
}

export default App;
