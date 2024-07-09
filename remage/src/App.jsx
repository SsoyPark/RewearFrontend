import React from "react";
import Home from "./pages/Home"; // Home 컴포넌트 불러오기
import Login from "./pages/Login";
import LoginGeneral from "./pages/LoginGeneral";
import LoginCompany from "./pages/LoginCompany";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mypage from "./pages/Mypage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const shutDownSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <div>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} shutDownSidebar={shutDownSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/mypage/" element={<Mypage />} />
          {/* <Route path="/login/general/" element={<LoginGeneral />} />
          <Route path="/login/company/" element={<LoginCompany />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
