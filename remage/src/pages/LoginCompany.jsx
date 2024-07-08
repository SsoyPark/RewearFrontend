import React from "react";
import { useState } from "react";
// import "./LoginGeneral.css";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const LoginCompany = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("company");

  const handleGeneralClick = () => {
    navigate("/login/general");
  };
  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <div className="login-title">로그인</div>
          <div className="user-type-selector">
            <Button
              style={{ backgroundColor: "F4F5F6", color: "black" }}
              onClick={handleGeneralClick}
            >
              일반
            </Button>
            <Button>기업</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
