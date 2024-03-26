import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import { Route,Routes,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/Report/ReportPage";
import Consultation from "./pages/Consultation/ConsultationPage";

const App = () => {
  return (
    <div>
      { <BrowserRouter>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Report" element={<ReportPage/>}/>
      <Route path="/Consult" element={<Consultation/>}/>
    </Routes>

      </BrowserRouter> 
      }
    </div>
  );
};

export default App;