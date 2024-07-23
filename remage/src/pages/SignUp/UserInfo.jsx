import React from "react";
import styles from "./UserInfo.module.css";
import styles2 from "./SignUp.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import { useState, useEffect } from "react";
import InputError from "../../components/common/InputError";
import PostcodeComponent from "./PostcodeComponent";
import UserInfoNextButton from "./UserInfoNextButton";
import { signUp, signUpB, duplicationCheck } from "../../api/signup";

const UserInfo = ({
  setCurrentStage,
  emailRecieveChecked,
  smsRecieveChecked,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const [isValidAccess, setIsValidAccess] = useState(false);
  useEffect(() => {
    if (location.state?.from !== "TermsOfServices") {
      alert("일반적이지 않은 접근입니다!");
      navigate("/");
      return;
    }
    setCurrentStage("정보입력");
    setIsValidAccess(true);
  }, [location, navigate, setCurrentStage]);
  const [userId, setUserId] = useState("");
  const [userIdSystemMessage, setUserIdSystemMessage] = useState("");
  const [isUserIdValid, setIsUserIdValid] = useState(false);

  const [nickname, setNickname] = useState("");
  const [nicknameSystemMessage, setNicknameSystemMessage] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordSystemMessage, setPasswordSystemMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);
  const [passwordConfirmSystemMessage, setPasswordConfirmSystemMessage] =
    useState("");

  const [businessNumber, setBusinessNumber] = useState("");
  const [businessNumberSystemMessage, setBusinessNumberSystemMessage] =
    useState("");
  const [isBusinessNumberValid, setIsBusinessNumberValid] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessNameSystemMessage, setBusinessNameSystemMessage] =
    useState("");
  const [isBusinessNameValid, setIsBusinessNameValid] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    setUserIdSystemMessage("");
    setIsUserIdValid(false);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setNicknameSystemMessage("");
    setIsNicknameValid(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setIsPasswordValid(false);
      setPasswordSystemMessage("비밀번호는 최소 8글자 이상이어야 합니다.");
    } else if (!/[a-zA-Z]/.test(newPassword)) {
      setIsPasswordValid(false);
      setPasswordSystemMessage(
        "비밀번호에는 최소 하나의 영문자가 포함되어야 합니다."
      );
    } else if (!/[!@#$%^&*(),.?":{}`~<>]/.test(newPassword)) {
      setIsPasswordValid(false);
      setPasswordSystemMessage(
        "비밀번호에는 최소 하나의 특수문자가 포함되어야 합니다."
      );
    } else {
      setIsPasswordValid(true);
      setPasswordSystemMessage("유효한 비밀번호 입니다.");
    }
    if (newPassword !== passwordConfirm) {
      setIsPasswordConfirmValid(false);
      setPasswordConfirmSystemMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsPasswordConfirmValid(true);
      setPasswordConfirmSystemMessage("비밀번호가 일치합니다.");
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);
    if (newPasswordConfirm !== password) {
      setIsPasswordConfirmValid(false);
      setPasswordConfirmSystemMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsPasswordConfirmValid(true);
      setPasswordConfirmSystemMessage("비밀번호가 일치합니다.");
    }
  };
  const handleBusinessNumberChange = (e) => {
    const newBusinessNumber = e.target.value;
    setBusinessNumber(newBusinessNumber);
    setBusinessNumberSystemMessage("");
    setIsBusinessNumberValid(false);
  };
  const handleBusinessNameChange = (e) => {
    const newBusinessName = e.target.value;
    setBusinessName(newBusinessName);
    setBusinessNameSystemMessage("");
    setIsBusinessNameValid(false);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleAddressDetailChange = (e) => {
    setAddressDetail(e.target.value);
  };

  const checkValue = async (value, type) => {
    // 실제 서버와의 통신 로직이 여기에 필요합니다.
    // 여기서는 예시로 임의의 로직을 사용합니다.
    try {
      const response = await duplicationCheck(value, type);
      const result = response.data.available;
      console.log(`중복검사 결과 : ${result}`);
      return result;
    } catch (err) {
      alert(err.message);
    }
  };
  const checkBusinessNumber = (businessNumber) => {
    return businessNumber !== "중복";
  };
  const handleUserIdCheck = async () => {
    if (!userId) {
      setIsUserIdValid(false);
      setUserIdSystemMessage("아이디를 입력해 주세요");
      return;
    }
    // 아이디 중복 확인 로직 구현
    // 예를 들어, 서버에 요청하여 중복 확인을 수행할 수 있습니다.
    const isValid = await checkValue(userId, "username");

    setIsUserIdValid(isValid);
    if (isValid) {
      setUserIdSystemMessage("사용 가능한 아이디입니다.");
    } else {
      setUserIdSystemMessage("이미 사용중인 아이디입니다.");
    }
  };

  const handleNicknameCheck = async () => {
    if (!nickname) {
      setIsNicknameValid(false);
      setNicknameSystemMessage("닉네임을 입력해 주세요");
      return;
    }
    // 아이디 중복 확인 로직 구현
    // 예를 들어, 서버에 요청하여 중복 확인을 수행할 수 있습니다.
    try {
      const isValid = await checkValue(nickname, "nickname");
      setIsNicknameValid(isValid);
      if (isValid) {
        setNicknameSystemMessage("사용 가능한 닉네임입니다.");
      } else {
        setNicknameSystemMessage("이미 사용중인 닉네임입니다.");
      }
    } catch (err) {
      alert(err + "중복확인중에 네트워크 에러가 발생했습니다.");
      setIsNicknameValid(false);
      setNicknameSystemMessage("에러가 발생했습니다. 잠시후에 다시 시도해주세요.");
    }
  };

  const handleBusinessNumberCheck = async () => {
    if (!businessNumber) {
      setIsBusinessNumberValid(false);
      setBusinessNumberSystemMessage("사업자등록번호를 입력해주세요.");
      return;
    }
    const isValid = checkBusinessNumber(businessNumber);
    setIsBusinessNumberValid(isValid);
    if (isValid) {
      setBusinessNumberSystemMessage("유효한 사업자등록번호 입니다.");
    } else {
      setBusinessNumberSystemMessage("유효하지 않은 사업자 등록번호 입니다.");
    }
  };

  const handleBusinessNameCheck = () => {
    if (!businessName) {
      setIsBusinessNameValid(false);
      setBusinessNameSystemMessage("회사명을 입력해주세요.");
      return;
    }
    const isValid = checkValue(businessName, "companyName");
    setIsBusinessNameValid(isValid);
    if (isValid) {
      setBusinessNameSystemMessage("유효한 회사명 입니다.");
    } else {
      setBusinessNameSystemMessage("유효하지 않은 회사명입니다.");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  const handleRegisterButton = async () => {
    if (
      !(
        isUserIdValid &&
        isPasswordConfirmValid &&
        isPasswordValid &&
        isNicknameValid &&
        address &&
        addressDetail &&
        (type === "general" || (isBusinessNameValid && isBusinessNumberValid))
      )
    ) {
      alert("입력이 유효하지 않습니다.");
    } else {
      if (type === "general") {
        console.log(emailRecieveChecked);
        try {
          const response = await signUp(
            userId,
            nickname,
            password,
            passwordConfirm,
            phoneNumber,
            address,
            addressDetail,
            true,
            true,
            smsRecieveChecked,
            emailRecieveChecked
          );

          navigate("/sign-up/complete/", {
            state: {
              from: "UserInfo",
              userId: userId,
              password: password,
              userType: type,
            },
          });
        } catch (err) {
          alert(err.message);
        }
      } else {
        try {
          const response = await signUpB(
            userId,
            nickname,
            businessNumber,
            businessName,
            password,
            passwordConfirm,
            phoneNumber,
            address,
            addressDetail,
            true,
            true,
            smsRecieveChecked,
            emailRecieveChecked
          );
          navigate("/sign-up/complete/", { state: { from: "UserInfo" } });
        } catch (err) {
          alert(err.message);
        }
      }
    }
  };

  return (
    <>
      {isValidAccess ? (
        <div className={styles["user-info-stage"]}>
          <h3 className={styles["sub-title"]}>정보입력</h3>
          <div>
            <div className={styles["input-set"]}>
              <FormInput
                label={
                  <span>
                    아이디 <span style={{ color: "#FC8181" }}>*</span>
                  </span>
                }
                placeholder="사용자 아이디를 입력해주세요."
                value={userId}
                onChange={handleUserIdChange}
              ></FormInput>
              <Button
                className="user-info-button"
                text="중복 확인"
                onClick={handleUserIdCheck}
              />
            </div>
            <InputError
              errorMessage={userIdSystemMessage}
              className={isUserIdValid ? "success" : ""}
            />
          </div>
          <div>
            <div className={styles["input-set"]}>
              <FormInput
                label={
                  <span>
                    닉네임 <span style={{ color: "#FC8181" }}>*</span>
                  </span>
                }
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="사용하실 닉네임을 입력해주세요."
              ></FormInput>
              <Button
                className="user-info-button"
                text="중복 확인"
                onClick={handleNicknameCheck}
              />
            </div>
            <InputError
              errorMessage={nicknameSystemMessage}
              className={isNicknameValid ? "success" : ""}
            />
          </div>
          {type === "company" && (
            <>
              <div>
                <div className={styles["input-set"]}>
                  <FormInput
                    label={
                      <span>
                        사업자 등록번호{" "}
                        <span style={{ color: "#FC8181" }}>*</span>
                      </span>
                    }
                    value={businessNumber}
                    onChange={handleBusinessNumberChange}
                    placeholder="사업자 등록 번호를 입력해주세요."
                  ></FormInput>
                  <Button
                    className="user-info-button"
                    text="확인"
                    onClick={handleBusinessNumberCheck}
                  />
                </div>
                <InputError
                  errorMessage={businessNumberSystemMessage}
                  className={isBusinessNumberValid ? "success" : ""}
                />
              </div>
              <div>
                <div className={styles["input-set"]}>
                  <FormInput
                    label={
                      <span>
                        회사명 <span style={{ color: "#FC8181" }}>*</span>
                      </span>
                    }
                    value={businessName}
                    onChange={handleBusinessNameChange}
                    placeholder="사용하실 회사명을 입력해주세요"
                  ></FormInput>
                  <Button
                    className="user-info-button"
                    text="중복 확인"
                    onClick={handleBusinessNameCheck}
                  />
                </div>
                <InputError
                  errorMessage={businessNameSystemMessage}
                  className={isBusinessNameValid ? "success" : ""}
                />
              </div>
            </>
          )}
          <div>
            <FormInput
              label={
                <span>
                  비밀번호 <span style={{ color: "#FC8181" }}>*</span>
                </span>
              }
              placeholder="비밀번호를 입력해주세요."
              type="password"
              value={password}
              onChange={handlePasswordChange}
            ></FormInput>
            <InputError
              errorMessage={passwordSystemMessage}
              className={isPasswordValid ? "success" : ""}
            />
          </div>
          <div>
            <FormInput
              label={
                <span>
                  비밀번호 확인 <span style={{ color: "#FC8181" }}>*</span>
                </span>
              }
              placeholder="비밀번호를 확인해주세요."
              type="password"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
            ></FormInput>
            <InputError
              errorMessage={passwordConfirmSystemMessage}
              className={isPasswordConfirmValid ? "success" : ""}
            />
          </div>
          <FormInput
            label="전화번호 (선택)"
            placeholder="전화번호를 입력해주세요."
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          ></FormInput>
          <div>
            <div className={styles["input-set"]}>
              <FormInput
                label={
                  <span>
                    주소 <span style={{ color: "#FC8181" }}>*</span>
                  </span>
                }
                value={address}
                onChange={handleAddressChange}
                placeholder="주소"
              ></FormInput>
              {/* <Button className="user-info-button" text="주소 검색" /> */}
              <PostcodeComponent
                className="user-info-button"
                text="주소 검색"
                setAddress={setAddress}
              />
            </div>
            <FormInput
              placeholder="상세주소를 입력해주세요."
              value={addressDetail}
              onChange={handleAddressDetailChange}
            ></FormInput>
            <div className={styles2["terms-of-services-next-button"]}>
              <UserInfoNextButton text="등록" onClick={handleRegisterButton} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserInfo;
