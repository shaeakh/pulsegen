import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import { Route,Routes,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/Report/ReportPage";
import Specialists from "./pages/Specialists/Specialists";
import Chatbox from './pages/Chatbox/Chatbox';
import Consultation from "./pages/Consultation/ConsultationPage";


const App = () => {
  return (
    <div>
      { <BrowserRouter>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chat" element={<Chatbox/>}/>
      <Route path="/specialists" element={<Specialists/>}/>
      <Route path="/report" element={<ReportPage/>}/>
      <Route path="/consult" element={<Consultation/>}/>
    </Routes>

      </BrowserRouter> 
      }
    </div>
  );
};

export default App;