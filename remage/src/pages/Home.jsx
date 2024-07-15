import React from "react";
import "./Home.css";
import useAuthStore from "../stores/useAuthStore";

const Home = () => {
  const { isAuthenticated } = useAuthStore();
  const isAuthenticated2 = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="home-container">
      <h1>Home</h1>
      <h1>{isAuthenticated2 ? "Authenticated" : "Not Authenticated"}</h1>
      <h1>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</h1>
    </div>
  );
};

export default Home;
