import React from "react";
import "./Mypage.css";
import Button from "../../components/common/Button";
import MypageSidebar from "./MypageSidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import MypageMain from "./MypageMain";
import MypageOrderlist from "./MypageOrderlist";
import ProtectedRoute from "../../components/ProtectedRoute";

const Mypage = () => {
  return (
    <div className="page my-page">
      <section>
        <div className="inner">
          <MypageSidebar />
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
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
