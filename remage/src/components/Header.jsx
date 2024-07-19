import React from "react";
import { FaUser, FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import useAuthStore from "../stores/useAuthStore";
import { useEffect } from "react";
import IconButton from "./common/IconButton";
import TextButton from "./common/TextButton";
import "./Header.css";
import SidebarItem from "./SidebarItem";

const Header = () => {
  const { logout } = useAuthStore();
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="header-container">
      <div className="header-line-2">
      <TextButton id="logo-main-page" text="REMAGE" url="/" />
      <div className="header-box">
        <div className="hamburger-logo-contents">
          {/* <IconButton>
            <RxHamburgerMenu
              style={{ fontSize: "30px" }}
            />
          </IconButton> */}
          <TextButton text="서비스" />
          <TextButton text="고객센터" />
        </div>
        <div className="search-profile-contents">       
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
          {isLoggedIn &&
            <IconButton url="/mypage/">
            <FaUser style={{ fontSize: "24px" }} />
          </IconButton>
          }
          {isLoggedIn ? (
            <TextButton
              className="logout-page-button"
              text="로그아웃"
              onClick={logout}
            />
        ) : (
          <>
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
            </>
        )} 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
