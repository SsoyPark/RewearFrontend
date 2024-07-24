import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import useAuthStore from "../stores/useAuthStore";
import Button from "../components/common/Button";
import Banner from "../components/Banner";

const Home = () => {
  const navigate = useNavigate();
  // const isAuthenticated = useAuthStore(
  //   (state) => state.isAuthenticated
  // );
  const { isAuthenticated, userType } = useAuthStore();
  const { login, logout } = useAuthStore();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      if (userType === "company") {
        navigate("/service/company/order/");
      } else {
        navigate("/service/general/write/");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-page">
      <div className="main-text">
        <p className="red">UPCYCLE</p>
        <p className="black">YOUR</p>
        <p className="black">CLOTHING</p>
        <Button
          className="try-button"
          text={userType === "company" ? "Manage Orders" : "Try Our Service"}
          onClick={handleButtonClick} // 버튼 클릭 핸들러 추가
        />
      </div>
      <Banner />
      <div className="home-container">
        {/* <h1>Home {userType}</h1>
        <h1>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</h1>
        <h1>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</h1>
        <Button
          text={isAuthenticated ? "임시 로그아웃" : "임시로그인"}
          onClick={isAuthenticated ? logout : () => login("sample", "sample")}
        /> */}
      </div>
    </div>
  );
};

export default Home;
