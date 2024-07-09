import React from "react";
import Home from "./pages/Home"; // Home 컴포넌트 불러오기
import Login from "./pages/Login";
import LoginGeneral from "./pages/LoginGeneral";
import LoginCompany from "./pages/LoginCompany";
import ServiceGeneral from "./pages/ServiceGeneral";
import ServiceGeneralWrite from "./pages/ServiceGeneralWrite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          {/* <Route path="/login/general/" element={<LoginGeneral />} />
          <Route path="/login/company/" element={<LoginCompany />} /> */}
          <Route path="/service/" />
          <Route path="/service/general/" element={<ServiceGeneral />} />
          <Route path="/service/general/write/" element={<ServiceGeneralWrite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
