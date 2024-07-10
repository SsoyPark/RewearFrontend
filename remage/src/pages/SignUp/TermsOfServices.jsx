import React from "react";
import FormCheckbox from "../../components/common/FormCheckbox";
import Button from "../../components/common/Button";
import { useState } from "react";
import InputError from "../../components/common/InputError";

const TermsOfServicesContent = ({
  title,
  text,
  confirmationText,
  id,
  handleChange,
}) => {
  return (
    <div className="terms-of-services-content">
      <div className="terms-of-services-title">{title}</div>
      <div className="terms-of-services-text">
        <p>{text}</p>
      </div>
      <div className="terms-of-services-checkbox-contents">
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
  const termsOfServicesText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl. Fusce eget dui dolor. Pellentesque condimentum libero sed justo maximus, vel frin gilla arcu egestas. Proin consequat ex vel mattis rhoncus. Vestibulum odio erat, vehicula semper pulvinar vel, molestie non quam. Vestibulum pulvinar, ex ac gravida suscipit, odio urna rhoncus orci, id sodales quam felis vitae nulla. Vestibulum sodales luctus velit, ut commodo est hendrerit ac. Nullam eleifend scelerisque facilisis. Phasellus interdum erat nec metus consequat consequat. Nullam fermentum congue lacus et suscipit. Aenean vitae lobortis nisl. Nunc rutrum velit quis augue feugiat varius. Nam accumsan pretium enim non rutrum. Vivamus sed metus ac libero eleifend efficitur. Maecenas sagittis justo sit amet augue iaculis molestie. ";
  const personalInformationText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius condimentum nisl. Fusce eget dui dolor. Pellentesque condimentum libero sed justo maximus, vel frin gilla arcu egestas. Proin consequat ex vel mattis rhoncus. Vestibulum odio erat, vehicula semper pulvinar vel, molestie non quam. Vestibulum pulvinar, ex ac gravida suscipit, odio urna rhoncus orci, id sodales quam felis vitae nulla. Vestibulum sodales luctus velit, ut commodo est hendrerit ac. Nullam eleifend scelerisque facilisis. Phasellus interdum erat nec metus consequat consequat. Nullam fermentum congue lacus et suscipit. Aenean vitae lobortis nisl. Nunc rutrum velit quis augue feugiat varius. Nam accumsan pretium enim non rutrum. Vivamus sed metus ac libero eleifend efficitur. Maecenas sagittis justo sit amet augue iaculis molestie. ";
  const [termsOfServiceChecked, setTermsOfServiceChecked] = useState(false);
  const [userInfoChecked, setUserInfoChecked] = useState(false);
  const [termsOfServiceError, setTermsOfServiceError] = useState("");
  const [userInfoError, setUserInfoError] = useState("");
  const handleNextButton = () => {
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
    setCurrentStage("정보입력");
  };
  return (
    <div id="terms-of-services">
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
      <div className="selective-checkbox-contents">
        <FormCheckbox label="SMS 수신 동의 (선택)" id="terms-checkbox-3" />
        <FormCheckbox label="이메일 수신 동의 (선택)" id="terms-checkbox-4" />
      </div>
      <div className="terms-of-services-next-button">
        <Button text="다음" onClick={handleNextButton} />
      </div>
    </div>
  );
};

export default TermsOfServices;
