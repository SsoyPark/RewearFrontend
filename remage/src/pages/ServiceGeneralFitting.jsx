import React from "react";
import { useState } from "react";
// import ImageUploader from "../components/common/ImageUploader";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralFitting.css";
import ImageUploader from "../components/common/ImageUploader";

const ServiceGeneralFitting = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("general");

    return (
        <div className="page service-general-write service-general-fitting">
            <section>
                <div className="inner">
                    <div className="wrap">
                        {/* 페이지 타이틀 시작 */}
                        <h2 className="section-title">주문하기</h2>
                        <div className="subtitle steps">
                            <span className="step round primary"><span>1.<span className="space"></span>주문서 작성</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>2.<span className="space"></span>가상피팅</span><span className="mute"> (선택)</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>3.<span className="space"></span>주문 확정</span></span>
                        </div>
                        {/* 페이지 타이틀 끝 */}
                        <div className="content fitting">
                            <h3 className="paragraph-title">가상피팅</h3>
                            <div className="text-wrap">
                                <p className="text-margin-bottom">아래 주의사항을 참고해 피팅 서비스를 받을 고객님의 사진을 업로드해주세요.</p>
                                <p>얼굴과 발을 포함한 전신이 사진에 보이도록 해주세요.</p>
                                <p className="text-margin-bottom">양손이 사진에 드러나되 상의를 가리지 않아야 합니다.</p>
                                {/* <HoverImage hoverText="이 곳" imgUrl="https://i.imgur.com/Ll28AZT.png" imgAlt="가상피팅을 위한 사진 촬영 예시"/><p>에 마우스를 올리면 예시 사진을 확인할 수 있습니다.</p> */}
                            </div>
                            <div className="img-container">
                                {/* <img src="https://img.animalplanet.co.kr/thumbnail/2020/05/20/2000/e23u07g3t2a9461ruhm0.jpg" alt="" /> */}
                                <ImageUploader className="uploader-long" />
                                {/* <img src="https://i.imgur.com/Ll28AZT.png" alt="사용자 사진" /> */}
                                <img src="https://i.imgur.com/oKOesax.jpeg" alt="가상피팅 사진" />
                            </div>
                            <Button
                                    text="가상피팅 실행하기"
                                    className="btn-full-width btn-white"
                                    // onClick={handleSubmit}
                                />
                            {/* 하단 버튼 영역 시작 */}
                            <div className="order-bottom-btn">
                                {/* <Button
                                    text="건너뛰기"
                                    className="btn-next btn-white"
                                    url="/service/general/write/confirm/"
                                /> */}
                                <Button
                                    text="다음"
                                    className="btn-next"
                                    url="/service/general/write/confirm/"
                                    // onClick={handleSubmit}
                                />
                            </div>
                            {/* 하단 버튼 영역 끝 */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceGeneralFitting;