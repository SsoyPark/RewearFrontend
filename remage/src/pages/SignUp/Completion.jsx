import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const Completion = () => {
  const [isValidAccess, setIsValidAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.from !== "UserInfo") {
      alert("일반적이지 않은 접근입니다!");
      navigate("/");
      return;
    }
    setIsValidAccess(true);
  }, [location, navigate]);
  return (
    <div className={`${styles["sign-up-page"]} page`}>
      <section>
        <div className="inner">
          <div className={`${styles["wrap"]} wrap`}>
            <FiCheckCircle fontSize="40px" />
            <h3 className={`${styles["section-title"]}`}>회원가입 완료</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Completion;
