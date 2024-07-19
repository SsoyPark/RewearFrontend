import React from 'react';
import styles from './Modal.module.css'
import { getUserProfile } from '../../api/auth';

const Modal = ({ show, handleClose, handleFileChange, handleFileSubmit }) => {
  if (!show) return null;
  const userProfile = getUserProfile("general")
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <h2>이미지 업로드</h2>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button onClick={handleFileSubmit}>업로드</button>
        <button onClick={handleClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
