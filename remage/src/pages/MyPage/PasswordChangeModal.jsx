import React from "react";
import styles from "./PasswordChangeModal.module.css";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";

const PasswordChangeModal = ({ show, onClose, children }) => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["title-content"]}>
          <h3 className={styles["modal-title"]}>비밀번호 변경</h3>
          <button className={styles["close-button"]} onClick={onClose}>
            &times;
          </button>
        </div>
        <FormInput label="기존 비밀번호" id="previous-password"></FormInput>
        <FormInput label="새 비밀번호" id="new-password"></FormInput>
        <FormInput
          label="새 비밀번호 확인"
          id="previous-password-confirm"
        ></FormInput>
        <Button />
      </div>
    </div>
  );
};

export default PasswordChangeModal;
