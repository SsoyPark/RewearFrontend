import React from "react";
import useAuthStore from "../stores/useAuthStore";
import TextButton from "./common/TextButton";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout } = useAuthStore();
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    const confirmed = window.confirm("정말 로그아웃 하시겠습니까?");
    if (confirmed) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="header-container">
      <div className="header-line-2">
        {/* <TextButton id="logo-main-page" text="REMAGE" url="/" /> */}
        <div className="header-box">
          <Link to={`${baseUrl}/`} id="logo-main-page">
            <img src="/img/logo.png" alt="REMAGE Logo" />
          </Link>
          <div className="search-profile-contents">
            {/* <TextButton text="서비스" />
          <TextButton text="고객센터" /> */}
          </div>
          <div className="search-profile-contents">
            {isLoggedIn && <TextButton text="마이페이지" url="/mypage/main" />}
            {isLoggedIn && <TextButton text="고객센터" url="/Board/" />}
            {isLoggedIn ? (
              <TextButton
                className="logout-page-button"
                text="로그아웃"
                onClick={handleLogoutClick}
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
