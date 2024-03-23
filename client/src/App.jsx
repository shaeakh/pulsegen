import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Route,Routes,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/Report/ReportPage";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Report" element={<ReportPage/>}/>
    </Routes>

      </BrowserRouter> */
      <HomePage/>}
    </div>
  );
};

export default App;