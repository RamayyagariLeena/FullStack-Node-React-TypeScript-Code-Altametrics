import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { SnackbarProvider } from "notistack";
import SignIn from "./pages/SignIn";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function App() {


  return (
    <SnackbarProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/App/*" element={<DashboardPage />} />
        </Routes>
    </SnackbarProvider>
  );
}

export default App;
