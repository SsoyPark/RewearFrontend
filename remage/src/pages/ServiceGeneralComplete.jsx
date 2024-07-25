import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralComplete.css";
import { getUserProfile } from "../api/auth";

const ServiceGeneralComplete = () => {
  const [selectedUserType, setSelectedUserType] = useState("general");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      console.log("마이 페이지에서 요청");
      try {
        const {
          data: { nickname },
        } = await getUserProfile();
        setNickname(nickname);
      } catch (err) {
        // setError(err);
      }
    };
    fetchProfile();
  }, []);
  return (
    <div className="page service-general-complete">
      <section>
        <div className="inner">
          <div className="wrap">
            <h2 className="section-title">주문 완료</h2>
            <div className="content">
              {/* <h3>주문 완료</h3> */}
              <div>
                <p>
                  {nickname} 님의
                  <br />
                  문의가 정상적으로 등록되었습니다.
                </p>
              </div>
              <Button
                className="btn-white btn-go-home"
                text="홈으로 돌아가기"
                url="/"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceGeneralComplete;
