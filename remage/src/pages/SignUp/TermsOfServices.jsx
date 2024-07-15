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

const TermsOfServices = ({ setCurrentStage }) => {
  useEffect(() => {
    setCurrentStage("약관동의");
  }, [setCurrentStage]);
  const navigate = useNavigate();
  const termsOfServicesText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl. Fusce eget dui dolor. Pellentesque condimentum libero sed justo maximus, vel frin gilla arcu egestas. Proin consequat ex vel mattis rhoncus. Vestibulum odio erat, vehicula semper pulvinar vel, molestie non quam. Vestibulum pulvinar, ex ac gravida suscipit, odio urna rhoncus orci, id sodales quam felis vitae nulla. Vestibulum sodales luctus velit, ut commodo est hendrerit ac. Nullam eleifend scelerisque facilisis. Phasellus interdum erat nec metus consequat consequat. Nullam fermentum congue lacus et suscipit. Aenean vitae lobortis nisl. Nunc rutrum velit quis augue feugiat varius. Nam accumsan pretium enim non rutrum. Vivamus sed metus ac libero eleifend efficitur. Maecenas sagittis justo sit amet augue iaculis molestie. ";
  const personalInformationText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl. Fusce eget dui dolor. Pellentesque condimentum libero sed justo maximus, vel frin gilla arcu egestas. Proin consequat ex vel mattis rhoncus. Vestibulum odio erat, vehicula semper pulvinar vel, molestie non quam. Vestibulum pulvinar, ex ac gravida suscipit, odio urna rhoncus orci, id sodales quam felis vitae nulla. Vestibulum sodales luctus velit, ut commodo est hendrerit ac. Nullam eleifend scelerisque facilisis. Phasellus interdum erat nec metus consequat consequat. Nullam fermentum congue lacus et suscipit. Aenean vitae lobortis nisl. Nunc rutrum velit quis augue feugiat varius. Nam accumsan pretium enim non rutrum. Vivamus sed metus ac libero eleifend efficitur. Maecenas sagittis justo sit amet augue iaculis molestie. ";
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
        text={termsOfServicesText}
        confirmationText="개인정보 수집 및 이용 동의 (필수)"
        id="terms-checkbox-2"
        handleChange={() => setUserInfoChecked(!userInfoChecked)}
      />
      {userInfoError && <InputError errorMessage={userInfoError} />}
      <div className={styles["selective-checkbox-contents"]}>
        <FormCheckbox label="SMS 수신 동의 (선택)" id="terms-checkbox-3" />
        <FormCheckbox label="이메일 수신 동의 (선택)" id="terms-checkbox-4" />
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
