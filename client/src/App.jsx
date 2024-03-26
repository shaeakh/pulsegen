import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Route,Routes,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/Report/ReportPage";
import Specialists from "./pages/Specialists/Specialists";
import Chatbox from './pages/Chatbox/Chatbox'
const App = () => {
  return (
    <div>
      <Chatbox/>  
    </div>
  );
};

export default App;