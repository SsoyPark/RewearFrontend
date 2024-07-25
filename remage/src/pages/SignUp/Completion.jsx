import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Completion.module.css";
import Button from "../../components/common/Button";
import useAuthStore from "../../stores/useAuthStore";
import { loginService } from "../../service/user";

const Completion = () => {
  const { login } = useAuthStore();
  const [isValidAccess, setIsValidAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
  const password = location.state?.password;
  const userType = location.state?.userType;
  const nickname = location.state?.nickname;
  const handleLoginClick = async () => {
    console.log(userId);
    console.log(password);
    try {
      await loginService(userId, password, navigate, login, userType);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    if (location.state?.from !== "UserInfo") {
      alert("일반적이지 않은 접근입니다!");
      navigate("/");
      return;
    }
    setIsValidAccess(true);
  }, [location, navigate]);
  return (
    <div className={`${styles["complete-page"]} page`}>
      <section>
        <div className="inner">
          <div className={`${styles["wrap"]} wrap`}>
            <FiCheckCircle fontSize="40px" color="#495057" />
            <h3 className={`${styles["title"]}`}>회원가입 완료</h3>
            <p className={`${styles["guide-text"]} text-center`}>
              {nickname} 님의 회원가입이 <br /> 성공적으로 완료되었습니다.
            </p>
            <Button
              text="로그인 하기"
              className="sign-up-complete"
              onClick={handleLoginClick}
            ></Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Completion;
