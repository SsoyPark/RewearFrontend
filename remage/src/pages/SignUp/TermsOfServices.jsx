import React, { useState, useEffect } from "react";
import FormCheckbox from "../../components/common/FormCheckbox";
import Button from "../../components/common/Button";
import InputError from "../../components/common/InputError";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const TermsOfServicesContent = ({
  title,
  text,
  confirmationText,
  id,
  handleChange,
}) => {
  return (
    <div className={styles["terms-of-services-content"]}>
      <h2 className={styles["terms-of-services-title"]}>{title}</h2>
      <div className={styles["terms-of-services-text"]}>
        <p>{text}</p>
      </div>
      <div className={styles["terms-of-services-checkbox-contents"]}>
        <FormCheckbox
          id={id}
          label={confirmationText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const TermsOfServices = ({
  setCurrentStage,
  emailRecieveChecked,
  smsRecieveChecked,
  setEmailRecieveChecked,
  setSmsRecieveChecked,
}) => {
  useEffect(() => {
    setCurrentStage("약관동의");
  }, [setCurrentStage]);
  const navigate = useNavigate();
  const termsOfServicesText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl. Fusce eget dui dolor. Pellentesque condimentum libero sed justo maximus, vel frin gilla arcu egestas. Proin consequat ex vel mattis rhoncus. Vestibulum odio erat, vehicula semper pulvinar vel, molestie non quam. Vestibulum pulvinar, ex ac gravida suscipit, odio urna rhoncus orci, id sodales quam felis vitae nulla. Vestibulum sodales luctus velit, ut commodo est hendrerit ac. Nullam eleifend scelerisque facilisis. Phasellus interdum erat nec metus consequat consequat. Nullam fermentum congue lacus et suscipit. Aenean vitae lobortis nisl. Nunc rutrum velit quis augue feugiat varius. Nam accumsan pretium enim non rutrum. Vivamus sed metus ac libero eleifend efficitur. Maecenas sagittis justo sit amet augue iaculis molestie. ";
  const personalInformationText =
    <p>Re:WEAR는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.<br/>
    <br/>
    <strong>제 1조(개인정보의 처리목적)</strong> Re:WEAR는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는  「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/>
    <br/>
    1. 홈페이지 회원 가입 및 관리<br/>
    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정 대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.<br/>
    2. 재화 또는 서비스 제공<br/>
    물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심을 목적으로 개인정보를 처리합니다.
    3. 고충처리<br/>
    민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보의 목적으로 개인정보를 처리합니다.<br/>
    
    
    </p>;
  const [termsOfServiceChecked, setTermsOfServiceChecked] = useState(false);
  const [userInfoChecked, setUserInfoChecked] = useState(false);
  const [termsOfServiceError, setTermsOfServiceError] = useState("");
  const [userInfoError, setUserInfoError] = useState("");
  const handleNextButton = (event, type) => {
    event.preventDefault();
    let flag = false;
    if (!termsOfServiceChecked) {
      setTermsOfServiceError("이용 약관에 동의해주세요.");
      flag = true;
    } else {
      setTermsOfServiceError("");
    }
    if (!userInfoChecked) {
      setUserInfoError("개인정보 수집 및 이용에 동의해주세요.");
      flag = true;
    } else {
      setUserInfoError("");
    }
    if (flag) {
      return;
    }
    navigate(`/sign-up/userinfo/?type=${type}`, {
      state: { from: "TermsOfServices" },
    });
  };
  return (
    <div className={styles["terms-of-services"]}>
      <TermsOfServicesContent
        title="이용약관"
        text={termsOfServicesText}
        confirmationText="이용약관 동의 (필수)"
        id="terms-checkbox-1"
        handleChange={() => setTermsOfServiceChecked(!termsOfServiceChecked)}
      />
      {termsOfServiceError && <InputError errorMessage={termsOfServiceError} />}
      <TermsOfServicesContent
        title="개인정보 수집 및 이용 동의"
        text={personalInformationText}
        confirmationText="개인정보 수집 및 이용 동의 (필수)"
        id="terms-checkbox-2"
        handleChange={() => setUserInfoChecked(!userInfoChecked)}
      />
      {userInfoError && <InputError errorMessage={userInfoError} />}
      <div className={styles["selective-checkbox-contents"]}>
        <FormCheckbox
          label="SMS 수신 동의 (선택)"
          id="terms-checkbox-3"
          onChange={() => setSmsRecieveChecked(!smsRecieveChecked)}
        />
        <FormCheckbox
          label="이메일 수신 동의 (선택)"
          id="terms-checkbox-4"
          onChange={() => setEmailRecieveChecked(!emailRecieveChecked)}
        />
      </div>
      <div className={styles["next-button"]}>
        <div className={styles["terms-of-services-next-button"]}>
          <Button
            text="일반 회원 가입"
            onClick={(e) => handleNextButton(e, "general")}
          />
        </div>
        <div className={styles["terms-of-services-next-button"]}>
          <Button
            text="기업 회원 가입"
            onClick={(e) => handleNextButton(e, "company")}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsOfServices;
