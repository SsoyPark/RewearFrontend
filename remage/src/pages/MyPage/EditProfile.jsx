import React, { useState, useEffect } from "react";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import PostcodeComponent from "../SignUp/PostcodeComponent";
import styles from "./EditProfile.module.css";
import PasswordChangeModal from "./PasswordChangeModal";
import { getUserProfile, patchProfile } from "../../api/auth";
import { duplicationCheck } from "../../api/signup";
import InputError from "../../components/common/InputError";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null);
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      console.log("프로필 페이지에서 요청");
      try {
        const response = await getUserProfile();
        const profile = response.data;
        setProfile(profile);
        setUserId(profile.username);
        setNickname(profile.nickname);
        setPhoneNumber(profile.phone);
        setAddress(profile.address);
        setDetailAddress(profile.detail_address);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const [nicknameSystemMessage, setNicknameSystemMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  //닉네임이 원래 닉네임과 같으면 valid, 달라지면 invalid
  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    const isChanged = newNickname !== profile.nickname;
    setIsNicknameChanged(isChanged);
    setIsNicknameValid(!isChanged);
    setNicknameSystemMessage("");
  };
  const handleNicknameCheck = async () => {
    // 유효성 검사
    if (!isNicknameChanged) {
      setNicknameSystemMessage("닉네임이 변경되지 않았습니다.");
      setIsNicknameValid("true");
      return;
    }
    if (nickname.includes(" ") || nickname.length < 4) {
      setNicknameSystemMessage("유효하지 않은 닉네임입니다.");
      return;
    }
    const isValid = await duplicationCheck(nickname, "nickname");
    setIsNicknameValid(isValid);
    if (isValid) {
      setNicknameSystemMessage("사용 가능한 닉네임입니다.");
    } else {
      setNicknameSystemMessage("이미 사용중인 닉네임입니다.");
    }
    return;
  };
  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };
  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
  };
  const handleDetailAddressChange = (e) => {
    const newDetailAddress = e.target.value;
    setDetailAddress(newDetailAddress);
  };

  const handleEditButton = async () => {
    try {
      const response = await patchProfile("general", {
        username: userId,
        nickname: nickname,
        phone: phoneNumber,
        address: address,
        detail_address: detailAddress,
      });
    } catch (err) {
      alert(err.message);
    } finally {
      navigate('/mypage/main')
    }
  };

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
              <FormInput
                value={detailAddress}
                onChange={handleDetailAddressChange}
                placeholder="상세주소를 입력해주세요."
              ></FormInput>
              <div className={styles["cancel-confirm-buttons"]}>
                <Button text="취소" className="cancel" url="/mypage/main"/>
                <Button text="수정" className="confirm" onClick={handleEditButton}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
