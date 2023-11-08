import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./components/Dashboard";
import './App.css';
function App() {
  return (

    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="Rightsidebar">
        <RightSidebar />
      </div>
    </div>

  );
}

export default App;
