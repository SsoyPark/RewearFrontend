import React from "react";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import PostcodeComponent from "../SignUp/PostcodeComponent";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <div className="page">
      <section>
        <div className={`${styles["inner"]} inner`}>
          <div className={styles["wrap"]}>
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
                    placeholder="기존 아이디"
                    disabled
                  ></FormInput>
                  <Button className="user-info-button" text="중복 확인" />
                </div>
              </div>
              <div>
                <div className={styles["input-set"]}>
                  <FormInput
                    label={
                      <span>
                        닉네임 <span style={{ color: "#FC8181" }}>*</span>
                      </span>
                    }
                    placeholder="기존 닉네임"
                  ></FormInput>
                  <Button className="user-info-button" text="중복 확인" />
                </div>
              </div>
              <div></div>
              <div></div>
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
                    placeholder="주소"
                  ></FormInput>
                  {/* <Button className="user-info-button" text="주소 검색" /> */}
                  <PostcodeComponent
                    className="user-info-button"
                    text="주소 검색"
                  />
                </div>
                <FormInput placeholder="상세주소를 입력해주세요."></FormInput>
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
