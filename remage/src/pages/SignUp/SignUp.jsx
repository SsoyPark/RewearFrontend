import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../../components/common/Button";
import TermsOfServices from "./TermsOfServices";
import UserInfo from "./UserInfo";
import Completion from "./Completion";

const SignUp = () => {
  const [emailRecieveChecked, setEmailRecieveChecked] = useState(false);
  const [smsRecieveChecked, setSmsRecieveChecked] = useState(false);
  const [currentStage, setCurrentStage] = useState("약관동의");
  return (
    <div className={`${styles["sign-up-page"]} page`}>
      <section>
        <div className="inner">
          <div className={`${styles["wrap"]} wrap`}>
            <h2 className="section-title">회원가입</h2>
            <div className={styles["sign-up-navigation-bar"]}>
              <Button
                text="1. 약관동의"
                className={`navigation-button ${
                  currentStage === "약관동의" ? "active" : ""
                }`}
              />
              <MdOutlineKeyboardArrowRight style={{ color: "grey" }} />
              <Button
                text="2. 정보입력"
                className={`navigation-button ${
                  currentStage === "정보입력" ? "active" : ""
                }`}
              />
              <MdOutlineKeyboardArrowRight style={{ color: "grey" }} />
              <Button
                text="3. 가입완료"
                className={`navigation-button ${
                  currentStage === "가입완료" ? "active" : ""
                }`}
              />
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="confirm" replace />} />
              <Route
                path="confirm"
                element={<TermsOfServices setCurrentStage={setCurrentStage} emailRecieveChecked={emailRecieveChecked} smsRecieveChecked={smsRecieveChecked} setEmailRecieveChecked={setEmailRecieveChecked} setSmsRecieveChecked={setSmsRecieveChecked}/>}
              />
              <Route
                path="userinfo"
                element={<UserInfo setCurrentStage={setCurrentStage} emailRecieveChecked={emailRecieveChecked} smsRecieveChecked={smsRecieveChecked}/>}
              />
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
