import React from "react";
import "./Mypage.css";
import MypageSidebar from "./MypageSidebar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MypageMain from "./MypageMain";
import MypageOrderlist from "./MypageOrderlist";
import ProtectedRoute from "../../components/ProtectedRoute";
import MypageOrderdetail from "./MypageOrderdetail";
import NotFound from "../NotFound";

const Mypage = () => {
  const currentLocation = useLocation();
  const hideSidebar =
    currentLocation.pathname === "/mypage/orderlist" ||
    /^\/mypage\/orderdetail\/\d+$/.test(currentLocation.pathname);
  return (
    <div className="page my-page">
      <section>
        <div className="inner">
          {!hideSidebar && <MypageSidebar />}
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
              path="orderdetail/:orderid"
              element={
                <ProtectedRoute>
                  <MypageOrderdetail />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
