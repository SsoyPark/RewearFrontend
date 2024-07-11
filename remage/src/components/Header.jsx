import React from "react";
import { FaUser, FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

import IconButton from "./common/IconButton";
import TextButton from "./common/TextButton";
import SearchBox from "./common/SearchBox";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const isLoggedIn = false;

  return (
    <div className="header-container">
      <div className="header-line-1">
        {isLoggedIn ? (
          <div className="login-logout-buttons">
            <TextButton className="logout-page-button" text="로그아웃" />
          </div>
        ) : (
          <div className="login-logout-buttons">
            <TextButton
              className="login-page-button"
              url="/login/"
              text="로그인"
            />
            <TextButton
              className="sign-in-page-button"
              text="회원가입"
              url="/sign-up/"
            />
          </div>
        )}
      </div>
      <div className="header-line-2">
        <div className="hamburger-logo-contents">
          <IconButton>
            <RxHamburgerMenu
              style={{ fontSize: "30px" }}
              onClick={toggleSidebar}
            />
          </IconButton>
          <TextButton id="logo-main-page" text="REMAGE" url="/" />
        </div>
        <div className="search-profile-contents">
          <SearchBox />
          {isLoggedIn && (
            <IconButton>
              <FaRegBell style={{ fontSize: "24px" }} />
            </IconButton>
          )}
          {isLoggedIn && (
            <IconButton>
              <MdOutlineChatBubbleOutline style={{ fontSize: "24px" }} />
            </IconButton>
          )}
          <IconButton url="/mypage/">
            <FaUser style={{ fontSize: "24px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
