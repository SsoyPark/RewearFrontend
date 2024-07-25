import React from "react";
import styles from "./PasswordChangeModal.module.css";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import InputError from "../../components/common/InputError";
import { useState } from "react";
import { getUserProfile, patchPassword } from "../../api/auth";

const PasswordChangeModal = ({ show, onClose, children }) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");
  const [isNewPasswordConfirmValid, setIsNewPasswordConfirmValid] =
    useState(false);

  // 원래 패스워드
  const previousPassword = "previous";

  const handlePasswordChange = (e) => {
    // 패스워드 변경될 때 마다 일치하는지 확인
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    // if (passwordInput !== previousPassword) {
    //   setIsPasswordValid(false);
    //   setPasswordError("비밀번호가 일치하지 않습니다.");
    // } else {
    //   setIsPasswordValid(true);
    //   setPasswordError("비밀번호가 일치합니다.");
    // }
  };
  const handleNewPasswordChange = (e) => {
    // 비밀번호가 유효한지 확인
    const newPasswordInput = e.target.value;
    setNewPassword(newPasswordInput);
    if (newPasswordInput.length < 6) {
      setIsNewPasswordValid(false);
      setNewPasswordError("새 비밀번호가 유효하지 않습니다.");
    } else {
      setIsNewPasswordValid(true);
      setNewPasswordError("새 비밀번호가 유효합니다.");
    }
  };
  const handleNewPasswordConfirmChange = (e) => {
    // 새 비밀번호가 일치하는지 확인
    const newPasswordConfirmInput = e.target.value;
    setNewPasswordConfirm(newPasswordConfirmInput);
    if (newPasswordConfirmInput !== newPassword) {
      setIsNewPasswordConfirmValid(false);
      setNewPasswordConfirmError("새 비밀번호가 일치하지 않습니다.");
    } else {
      setIsNewPasswordConfirmValid(true);
      setNewPasswordConfirmError("새 비밀번호가 일치합니다.");
    }
  };
  const handleConfirmButtonClick = async () => {
    if (isNewPasswordValid && isNewPasswordConfirmValid) {
      //비밀번호 변경 요청
      try {
        console.log(password, newPassword, newPasswordConfirm);
        const response = await patchPassword({
          old_password: password,
          new_password: newPassword,
          verify_password: newPasswordConfirm,
        });
        alert("비밀번호 변경이 완료되었습니다.");
        onClose();
      } catch (err) {
        alert("비밀번호 변경 요청에 실패했습니다. " + err);
      }
      //
    } else {
      alert("입력을 확인해주세요.");
    }
  };
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["title-content"]}>
          <h3 className={styles["modal-title"]}>비밀번호 변경</h3>
          <button className={styles["close-button"]} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles["input-set"]}>
          <FormInput
            label="비밀번호"
            id="previous-password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          ></FormInput>
          <InputError
            errorMessage={passwordError}
            className={isPasswordValid ? "success" : ""}
          />
        </div>
        <div className={styles["input-set"]}>
          <FormInput
            label="새 비밀번호"
            id="new-password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          ></FormInput>
          <InputError
            errorMessage={newPasswordError}
            className={isNewPasswordValid ? "success" : ""}
          />
        </div>
        <div className={styles["input-set"]}>
          <FormInput
            label="새 비밀번호 확인"
            id="previous-password-confirm"
            value={newPasswordConfirm}
            onChange={handleNewPasswordConfirmChange}
          ></FormInput>
          <InputError
            type="password"
            errorMessage={newPasswordConfirmError}
            className={isNewPasswordConfirmValid ? "success" : ""}
          />
        </div>
        <div className={styles["cancel-confirm-buttons"]}>
          <Button text="취소" className="cancel" onClick={onClose} />
          <Button
            text="수정"
            className="confirm"
            onClick={handleConfirmButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeModal;
