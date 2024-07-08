import React from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import IconButton from "./common/IconButton";
import TextButton from "./common/TextButton";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className="header-line-1">
        <div className="login-logout-buttons">
          <TextButton>로그인</TextButton>
          <TextButton>회원가입</TextButton>
        </div>
      </div>
      <div className="header-line-2">
        <IconButton>
          <FaUser />
        </IconButton>
        <IconButton>
          <FaSignOutAlt />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
