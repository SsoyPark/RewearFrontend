import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Login.css";
import Button from "../../components/common/Button";
import GeneralLogin from "./GeneralLogin";

const CompanyLogin = () => {
  return <div>CompanyLogin</div>;
};

const Login = () => {
  const [selectedUserType, setSelectedUserType] = useState("general");

  const handleGeneralClick = () => {
    setSelectedUserType("general");
  };
  const handleCompanyClick = () => {
    setSelectedUserType("company");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title">로그인</div>
        <Routes>
          <Route path="/" element={<Navigate to="general" replace />} />
          <Route path="general" element={<GeneralLogin userType="general" />} />
          <Route path="company" element={<GeneralLogin userType="company" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;