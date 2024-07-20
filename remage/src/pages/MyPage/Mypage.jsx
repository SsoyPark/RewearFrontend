import React from "react";
import "./Mypage.css";
import Button from "../../components/common/Button";
import MypageSidebar from "./MypageSidebar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MypageMain from "./MypageMain";
import MypageOrderlist from "./MypageOrderlist";
import ProtectedRoute from "../../components/ProtectedRoute";
import MypageOrderdetail from "./MypageOrderdetail";

const Mypage = () => {
  const currentLocation = useLocation();
  return (
    <div className="page my-page">
      <section>
        <div className="inner">
          {currentLocation.pathname !== "/mypage/orderlist" && currentLocation.pathname !== "/mypage/orderdetail/" && <MypageSidebar />}
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Navigate to="main" replace />
                </ProtectedRoute>
              }
            />
            <Route
              path="main"
              element={
                <ProtectedRoute>
                  <MypageMain />
                </ProtectedRoute>
              }
            />
            <Route
              path="orderlist"
              element={
                <ProtectedRoute>
                  <MypageOrderlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="orderdetail"
              element={
                <ProtectedRoute>
                  <MypageOrderdetail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
