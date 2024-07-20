import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import useAuthStore from "../stores/useAuthStore";
import Button from "../components/common/Button";
import Banner from '../components/Banner';

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/service/general/write/");
    } else {
      navigate("/login/*");
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
          text="Try Our Service" 
          onClick={handleButtonClick} // 버튼 클릭 핸들러 추가
        />
      </div>
      <Banner />
    </div>
  );
};

export default Home;
