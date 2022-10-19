import './App.css';
import React from 'react';
import { Login } from './routes/Login';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { List } from './routes/List';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Welcome to Cloud Project - Pramatha</h1>
        {
          localStorage.getItem('username') &&
          <button onClick={() => {
            localStorage.removeItem('username');
            window.location.reload()
          }}>
            Log Out
          </button>
        }
      </header>
      <Router>
        <Routes>
          <Route index element={<Login />} />

          <Route path='home'
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            } />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
