import React from "react";
import { useState } from "react";
import "./LoginGeneral.css";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("general");

  const handleCompanyClick = () => {
    navigate("/login/company");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title">로그인</div>
        <div className="user-type-selector">
          <Button>일반</Button>
          <Button
            style={{ backgroundColor: "F4F5F6", color: "black" }}
            onClick={handleCompanyClick}
          >
            기업
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
