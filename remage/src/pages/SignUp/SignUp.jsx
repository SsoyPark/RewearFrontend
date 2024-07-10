import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../../components/common/Button";
import TermsOfServices from "./TermsOfServices";
import UserInfo from "./UserInfo";
import TextButton from "../../components/common/TextButton";
import FormCheckbox from "../../components/common/FormCheckbox";
import FormInput from "../../components/common/FormInput";
import IconButton from "../../components/common/IconButton";
import InputError from "../../components/common/InputError";
import SearchBox from "../../components/common/SearchBox";

const SignUp = () => {
  const [currentStage, setCurrentStage] = useState("약관동의");
  const renderStageComponent = () => {
    switch (currentStage) {
      case "약관동의":
        return <TermsOfServices setCurrentStage={setCurrentStage} />;
      case "정보입력":
        return <UserInfo />;
      // case "가입완료":
      //   return <Completion />;
      default:
        return <TermsOfServices />;
    }
  };
  return (
    <div id="sign-up-page">
      <div id="sign-up-title">회원가입</div>
      <div id="sign-up-navigation-bar">
        <Button
          text="1. 약관동의"
          className={`navigation-button ${
            currentStage === "약관동의" ? "active" : ""
          }`}
          onClick={() => setCurrentStage("약관동의")}
        />
        <MdOutlineKeyboardArrowRight style={{ color: "grey" }} />
        <Button
          text="2. 정보입력"
          className={`navigation-button ${
            currentStage === "정보입력" ? "active" : ""
          }`}
          onClick={() => setCurrentStage("정보입력")}
        />
        <MdOutlineKeyboardArrowRight style={{ color: "grey" }} />
        <Button
          text="3. 가입완료"
          className={`navigation-button ${
            currentStage === "가입완료" ? "active" : ""
          }`}
          onClick={() => setCurrentStage("가입완료")}
        />
      </div>
      {renderStageComponent()}
      {/* <Button text="버튼" className="my-button fdas" />
      <TextButton text="로그인" />
      <FormCheckbox label="로그인" />
      <FormInput label="로그인" />
      <InputError />
      <SearchBox /> */}
    </div>
  );
};

export default SignUp;
