import React, { useState, useEffect } from "react";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import PostcodeComponent from "../SignUp/PostcodeComponent";
import styles from "./EditProfile.module.css";
import PasswordChangeModal from "./PasswordChangeModal";

const EditProfile = () => {
  const [nickname, setNickname] = useState("defaultNickname");
  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    const isChanged = newNickname !== "defaultNickname";
    setIsNicknameChanged(isChanged);

    // 유효성 검사:공백확인
    if (newNickname.trim() === "" || newNickname.includes(" ")) {
      setIsNicknameValid(false);
      console.log("유효하지 않은 닉네임입니다.");
    }
  };
  useEffect(() => {
    if (nickname.includes(" ")) {
      setIsNicknameValid(false);
    }
    console.log(isNicknameValid);

    return () => {};
  }, [nickname, isNicknameValid]);
  return (
    <div className="page">
      <section>
        <div className={`${styles["inner"]} inner`}>
          <div className={styles["wrap"]}>
            <div className={styles["user-info-stage"]}>
              <h2 className={`$styles["sub-title"] section-title`}>
                프로필 정보 수정
              </h2>
              <div className={styles["input-set"]}>
                <FormInput
                  label={
                    <span>
                      아이디 <span style={{ color: "#FC8181" }}>*</span>
                    </span>
                  }
                  className="user-info"
                  placeholder="기존 아이디"
                  disabled
                ></FormInput>
              </div>
              <div className={styles["input-set"]}>
                <FormInput
                  label={
                    <span>
                      닉네임 <span style={{ color: "#FC8181" }}>*</span>
                    </span>
                  }
                  value={nickname}
                  onChange={handleNicknameChange}
                ></FormInput>
                <Button className="user-info-button" text="중복 확인" />
              </div>
              <div className={`${styles["input-set"]}`}>
                <div className={styles["password-field"]}>
                  <span>비밀번호</span>
                </div>
                <Button
                  className="user-info-button"
                  text="비밀번호 변경"
                  onClick={() => setIsModalOpen(true)}
                />
                {isModalOpen && (
                  <PasswordChangeModal
                    onClose={() => {
                      setIsModalOpen(false);
                    }}
                  />
                )}
              </div>
              <FormInput
                label="전화번호 (선택)"
                placeholder="전화번호를 입력해주세요."
              ></FormInput>

              <div className={styles["input-set"]}>
                <FormInput
                  label={
                    <span>
                      주소 <span style={{ color: "#FC8181" }}>*</span>
                    </span>
                  }
                  placeholder="주소"
                ></FormInput>
                {/* <Button className="user-info-button" text="주소 검색" /> */}
                <PostcodeComponent
                  className="user-info-button"
                  text="주소 검색"
                />
              </div>
              <FormInput placeholder="상세주소를 입력해주세요."></FormInput>
              <div className={styles["cancel-confirm-buttons"]}>
                <Button text="취소" className="cancel" />
                <Button text="수정" className="confirm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
