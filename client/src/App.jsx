import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbox from "./pages/Chatbox/Chatbox";
import Consultation from "./pages/Consultation/ConsultationPage";
import HomePage from "./pages/HomePage";
import InfoForm from "./pages/InfoFrom/InfoForm";
import UserReport from "./pages/Report/UserReport";
import Specialists from "./pages/Specialists/Specialists";

const App = () => {
  return (
    <div>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/infoform" element={<InfoForm />} />
            <Route path="/chat" element={<Chatbox />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/report/:id" element={<UserReport />} />
            <Route path="/consult" element={<Consultation />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};

export default App;
