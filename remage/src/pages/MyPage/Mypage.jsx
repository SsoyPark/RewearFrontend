import React from "react";
import "./Mypage.css";
import Button from "../../components/common/Button";
import MypageSidebar from "./MypageSidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import MypageMain from "./MypageMain";
import MypageOrderlist from "./MypageOrderlist";
import ProtectedRoute from "../../components/ProtectedRoute";
import MypageOrderdetail from "./MypageOrderdetail";

const Mypage = () => {
  return (
    <div className="page my-page">
      <section>
        <div className="inner">
          <MypageSidebar />
          <Routes>
            <Route path="/" element={<Navigate to="main" replace />} />
            <Route path="main" element={<MypageMain />} />
            <Route path="orderlist" element={<MypageOrderlist />} />
            <Route path="orderdetail" element={<MypageOrderdetail />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
