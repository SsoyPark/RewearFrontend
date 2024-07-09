import React from "react";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import IconButton from "./common/IconButton";
import TextButton from "./common/TextButton";
import SearchBox from "./common/SearchBox";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login/");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="header-line-1">
        <div className="login-logout-buttons">
          <TextButton
            className="login-page-button"
            onClick={handleLoginClick}
            text="로그인"
          />
          <TextButton className="sign-in-page-button" text="회원가입" />
        </div>
      </div>
      <div className="header-line-2">
        <div className="hamburger-logo-contents">
          <IconButton>
            <RxHamburgerMenu
              style={{ fontSize: "30px" }}
              onClick={toggleSidebar}
            />
          </IconButton>
          <TextButton
            id="logo-main-page"
            text="REMAGE"
            onClick={handleLogoClick}
          />
        </div>
        <div className="search-profile-contents">
          <SearchBox />
          <IconButton>
            <FaUser style={{ fontSize: "24px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
