import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
