import React from "react";
import "./Home.css";
import useAuthStore from "../stores/useAuthStore";
import Button from "../components/common/Button";
import Banner from '../components/Banner';

const Home = () => {
  const { login, logout } = useAuthStore();
  const { isAuthenticated } = useAuthStore();
  const isAuthenticated2 = useAuthStore((state) => state.isAuthenticated);

  // return (
  //   <div className="home-container">
  //     <h1>Home</h1>
  //     <h1>{isAuthenticated2 ? "Authenticated" : "Not Authenticated"}</h1>
  //     <h1>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</h1>
  //     <Button text={isAuthenticated?"임시 로그아웃":"임시로그인"} onClick={isAuthenticated?logout:()=>login("sample", "sample")}/>
      
  //   </div>
  // );

  return (
    <div className="home-page">
      <div className="main-text">
        <h1>UPCYCLE</h1>
        <h2>YOUR</h2>
        <h2>CLOTHING</h2>
        <button className="shop-now-button">Try Our Service</button>
      </div>
      <Banner />
    </div>
  );


};

export default Home;
