import React, { useState, useEffect } from "react";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import PostcodeComponent from "../SignUp/PostcodeComponent";
import styles from "./EditProfile.module.css";
import PasswordChangeModal from "./PasswordChangeModal";
import { getUserProfile } from "../../api/auth";

const EditProfile = () => {
  const [userId, setUserId] = useState("")
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [detailAddress, setDetailAddress] = useState("")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      console.log('프로필 페이지에서 요청');
      try {
        const response = await getUserProfile();
        const profile = response.data
        setUserId(profile.username)
        setNickname(profile.nickname)
        setPhoneNumber(profile.phone)
        setAddress(profile.address)
        setDetailAddress(profile.detail_address)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [])
  


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
    };

    return () => {};
  }, [nickname, isNicknameValid]);
  const handlePhoneNumberChange = (e) =>{
    const newPhoneNumber = e.target.value
    setPhoneNumber(newPhoneNumber);
  }
  const handleAddressChange = (e) =>{
    const newAddress = e.target.value
    setAddress(newAddress);
  }
  const handleDetailAddressChange = (e) =>{
    const newDetailAddress = e.target.value
    setDetailAddress(newDetailAddress);
  }

  if (loading) return <div>Loading...</div>;
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
                  placeholder={userId}
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
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              ></FormInput>

              <div className={styles["input-set"]}>
                <FormInput
                  label={
                    <span>
                      주소 <span style={{ color: "#FC8181" }}>*</span>
                    </span>
                  }
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="주소를 입력해주세요."
                ></FormInput>
                {/* <Button className="user-info-button" text="주소 검색" /> */}
                <PostcodeComponent
                  className="user-info-button"
                  text="주소 검색"
                />
              </div>
              <FormInput value={detailAddress} onChange={handleDetailAddressChange} placeholder="상세주소를 입력해주세요."></FormInput>
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
