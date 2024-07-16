import React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralComplete.css";

const ServiceGeneralComplete = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("general");

    return (
        <div className="page service-general-complete">
            <section>
                <div className="inner">
                    <div className="wrap">
                        <h2 className="section-title">주문하기</h2>
                        <div className="subtitle steps">
                            <span className="step round"><span>1.<span className="space"></span>주문서 작성하기</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>2.<span className="space"></span>리폼 디자인 추천받기</span></span>
                            <span className="next"></span>
                            <span className="step round primary"><span>3.<span className="space"></span>주문 완료</span></span>
                        </div>
                        <div className="content">
                            <h3>문의 등록 완료</h3>
                            <div>
                                <p>악수하는햄스터 님의<br/>문의가 정상적으로 등록되었습니다.</p>
                            </div>
                            <Button className="btn-white btn-go-home" text="홈으로 돌아가기" url="/" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceGeneralComplete;