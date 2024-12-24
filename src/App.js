import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthPage } from './AuthPage';
import RepositoryList from './RepositoryList';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <Routes>
        {/* Redirect the root path "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<AuthPage />} />
        <Route path="/repositories" element={<RepositoryList isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}/>} />
      </Routes>
    </Router>
  );
}

export default App;
