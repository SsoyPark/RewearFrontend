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
import { Link } from "react-router-dom";

const Header = () => {
  const { logout } = useAuthStore();
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <div className="header-container">
      <div className="header-line-2">
      {/* <TextButton id="logo-main-page" text="REMAGE" url="/" /> */}
      <Link to={`${baseUrl}/`} id="logo-main-page">
          <img src="/Logo.png" alt="REMAGE Logo" />
      </Link>
      <div className="header-box">
        <div className="search-profile-contents">
          {/* <TextButton text="서비스" />
          <TextButton text="고객센터" /> */}
        </div>
        <div className="search-profile-contents">       
          {isLoggedIn &&
            <TextButton text="마이페이지" url="/mypage/main"/>
          }
          {isLoggedIn &&
            <TextButton text="고객센터" url="/Board/"/>
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
