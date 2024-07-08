import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IconButton from "./common/IconButton";
import TextButton from "./common/TextButton";
import SearchBox from "./common/SearchBox";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login/general/");
  };
  return (
    <div>
      <div className="header-line-1">
        <div className="login-logout-buttons">
          <TextButton onClick={handleLoginClick}>로그인</TextButton>
          <TextButton>회원가입</TextButton>
        </div>
      </div>
      <div className="header-line-2">
        <div className="search-profile-contents">
          <SearchBox />
          <IconButton>
            <FaUser style={{ fontSize: "32px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
