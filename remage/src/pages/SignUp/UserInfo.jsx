import React from "react";
import styles from "./UserInfo.module.css";
import styles2 from "./SignUp.module.css";
import { Form, UNSAFE_ErrorResponseImpl, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import { useState, useEffect } from "react";
import InputError from "../../components/common/InputError";
import PostcodeComponent from "./PostcodeComponent";
import UserInfoNextButton from "./UserInfoNextButton";

const UserInfo = ({ setCurrentStage }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [userIdSystemMessage, setUserIdSystemMessage] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [nicknameSystemMessage, setNicknameSystemMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordSystemMessage, setPasswordSystemMessage] = useState("");
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);
  const [passwordConfirmSystemMessage, setPasswordConfirmSystemMessage] =
    useState(""); 
  const [businessNumber, setBusinessNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 6) {
      setIsPasswordValid(false);
      setPasswordSystemMessage("유효하지 않은 비밀번호 입니다.");
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
  const handleBusinessNumberChange = (e) =>{
    const newBusinessNumber = e.target.value;
    setBusinessNumber(newBusinessNumber);
  };
  const handleBusinessNameChange=(e)=>{
    const newBusinessName = e.target.value;
    setBusinessName(newBusinessName);
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleAddressDetailChange = (e) => {
    setAddressDetail(e.target.value);
  };

  const checkUserId = (userId) => {
    // 실제 서버와의 통신 로직이 여기에 필요합니다.
    // 여기서는 예시로 임의의 로직을 사용합니다.
    return userId !== "중복";
  };
  const checkNickname = (nickname) => {
    // 실제 서버와의 통신 로직이 여기에 필요합니다.
    // 여기서는 예시로 임의의 로직을 사용합니다.
    return nickname !== "중복";
  };
  const handleUserIdCheck = () => {
    if (!userId) {
      setIsUserIdValid(false);
      setUserIdSystemMessage("아이디를 입력해 주세요");
      return;
    }
    // 아이디 중복 확인 로직 구현
    // 예를 들어, 서버에 요청하여 중복 확인을 수행할 수 있습니다.
    const isValid = checkUserId(userId);
    setIsUserIdValid(isValid);
    if (isValid) {
      setUserIdSystemMessage("사용 가능한 아이디입니다.");
    } else {
      setUserIdSystemMessage("이미 사용중인 아이디입니다.");
    }
  };

  const handleNicknameCheck = () => {
    if (!nickname) {
      setIsNicknameValid(false);
      setNicknameSystemMessage("닉네임을 입력해 주세요");
      return;
    }
    // 아이디 중복 확인 로직 구현
    // 예를 들어, 서버에 요청하여 중복 확인을 수행할 수 있습니다.
    const isValid = checkNickname(nickname);
    setIsNicknameValid(isValid);
    if (isValid) {
      setNicknameSystemMessage("사용 가능한 닉네임입니다.");
    } else {
      setNicknameSystemMessage("이미 사용중인 닉네임입니다.");
    }
  };

  const handleRegisterButton = () => {
    if (
      !(
        isUserIdValid &&
        isPasswordConfirmValid &&
        isPasswordValid &&
        isNicknameValid &&
        address &&
        addressDetail
      )
    ) {
      alert("입력이 유효하지 않습니다.");
    } else {
      navigate("/sign-up/complete/", { state: { from: "UserInfo" } });
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
                    onClick={handleNicknameCheck}
                  />
                </div>
                <InputError
                  errorMessage={nicknameSystemMessage}
                  className={isNicknameValid ? "success" : ""}
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
                    onClick={handleNicknameCheck}
                  />
                </div>
                <InputError
                  errorMessage={nicknameSystemMessage}
                  className={isNicknameValid ? "success" : ""}
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
