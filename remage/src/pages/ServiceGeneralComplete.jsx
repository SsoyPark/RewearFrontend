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
                        <h2 className="section-title">주문 완료</h2>
                        <div className="content">
                            {/* <h3>주문 완료</h3> */}
                            <div>
                                <p>박소영 님의<br/>문의가 정상적으로 등록되었습니다.</p>
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