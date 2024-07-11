import React from "react";
import { useState } from "react";
// import ImageUploader from "../components/common/ImageUploader";
import TextButton from "../components/common/TextButton";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralRecommend.css";

const ServiceGeneralRecommend = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("general");

    return (
        <div className="page service-general-write service-general-recommend">
            <section>
                <div className="inner">
                    <div className="wrap">
                        <h2 className="section-title">주문하기</h2>
                        <div className="subtitle steps">
                            <span className="step round"><span>1.<span className="space"></span>주문서 작성하기</span></span>
                            <span className="next"></span>
                            <span className="step round primary"><span>2.<span className="space"></span>리폼 디자인 추천받기</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>3.<span className="space"></span>주문 완료</span></span>
                        </div>
                        <div className="content">
                            <h3 className="paragraph-title">리폼 디자인 추천</h3>
                            {/* <ImageUploader /> */}
                            <img src="https://img.animalplanet.co.kr/thumbnail/2020/05/20/2000/e23u07g3t2a9461ruhm0.jpg" alt="" />
                            <TextButton className="btn-grey" text="다시 추천받기" />
                            <Button
                                text="이 이미지 사용하기"
                                url="/service/general/write/recommend"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceGeneralRecommend;