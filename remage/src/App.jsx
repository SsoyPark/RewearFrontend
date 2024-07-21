import React from "react";
import Home from "./pages/Home"; // Home 컴포넌트 불러오기
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Completion from "./pages/SignUp/Completion";
import ServiceGeneral from "./pages/ServiceGeneral";
import ServiceGeneralWrite from "./pages/ServiceGeneralWrite";
import ServiceGeneralComplete from "./pages/ServiceGeneralComplete";
import ServiceGeneralConfirm from "./pages/ServiceGeneralConfirm";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mypage from "./pages/MyPage/Mypage";
import Board from "./pages/Board";
import EditProfile from "./pages/MyPage/EditProfile";
import CompanyOrder from "./pages/CompanyOrder";
import CompanyOrderList from "./pages/CompanyOrderlist";
import ServiceGeneralFitting from "./pages/ServiceGeneralFitting";
import Footer from "./components/Footer"; // Footer 컴포넌트 불러오기
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className={`sidebar-main-page ${isSidebarOpen ? "shift" : ""}`}>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/sign-up/*" element={<SignUp />} />
              <Route path="/sign-up/complete" element={<Completion />} />
              <Route path="/mypage/*" element={<Mypage />} />
              <Route path="/mypage/edit" element={<EditProfile />} />
              <Route path="/service/general/" element={<ServiceGeneral />} />
              <Route
                path="/service/general/write/"
                element={<ServiceGeneralWrite />}
              />
              <Route
                path="/service/general/write/fitting/"
                element={<ServiceGeneralFitting />}
              />
              <Route
                path="/service/general/write/complete/"
                element={<ServiceGeneralComplete />}
              />
              <Route
                path="/service/general/write/confirm"
                element={<ServiceGeneralConfirm />}
              />
              <Route path="/Board/" element={<Board />} />
              <Route path="/service/company/order" element={<CompanyOrder />} />
              <Route
                path="/service/company/orderlist"
                element={<CompanyOrderList />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
