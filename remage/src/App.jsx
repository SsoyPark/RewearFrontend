import React from "react";
import Home from "./pages/Home"; // Home 컴포넌트 불러오기
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Completion from "./pages/SignUp/Completion";
import ServiceGeneral from "./pages/ServiceGeneral";
import ServiceGeneralWrite from "./pages/ServiceGeneralWrite";
import ServiceGeneralRecommend from "./pages/ServiceGeneralRecommend";
import ServiceGeneralComplete from "./pages/ServiceGeneralComplete";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mypage from "./pages/Mypage/Mypage";
import Board from "./pages/Board";
import EditProfile from "./pages/Mypage/EditProfile";
import CompanyOrder from "./pages/CompanyOrder";
import CompanyOrderList from "./pages/CompanyOrderlist";
import Fitting from "./pages/Fitting/Fitting";

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
        <div className={`sidebar-main-page ${isSidebarOpen ? "shift" : ""}`}>
          <Sidebar isOpen={isSidebarOpen} shutDownSidebar={shutDownSidebar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/sign-up/*" element={<SignUp />} />
            <Route path="/sign-up/complete" element={<Completion />} />
            <Route path="/mypage/*" element={<Mypage />} />
            <Route path="/mypage/edit" element={<EditProfile />} />
            <Route path="/fitting" element={<Fitting/>} />
            {/* <Route path="/mypage/orderlist" element={<Mypageorderlist/>}/> */}
            {/* <Route path="/login/general/" element={<LoginGeneral />} />
            <Route path="/login/company/" element={<LoginCompany />} /> */}
            <Route path="/service/" />
            <Route path="/service/general/" element={<ServiceGeneral />} />
            <Route
              path="/service/general/write/"
              element={<ServiceGeneralWrite />}
            />
            <Route

              path="/service/general/write/recommend/"
              element={<ServiceGeneralRecommend />}
            />
            <Route
              path="/service/general/write/complete/"
              element={<ServiceGeneralComplete />}
            />
            <Route path="/Board/" element={<Board />} />
            <Route path="/service/company/order" element={<CompanyOrder />}/>
            <Route path="/service/company/orderlist" element={<CompanyOrderList />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
