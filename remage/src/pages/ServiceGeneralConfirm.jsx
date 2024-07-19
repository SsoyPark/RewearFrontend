import React, { useState, useEffect } from "react";
import ImageUploader from "../components/common/ImageUploader";
import Button from "../components/common/Button";
import TextButton from "../components/common/TextButton";
// import FormInput from "../components/common/FormInput";
import Textarea from "../components/common/Textarea";
import SelectField from "../components/common/SelectField";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralConfirm.css";


const ServiceGeneralConfirm = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("general");

    return (
        <div className="page service-general-write">
            <section>
                <div className="inner">
                    <div className="wrap">
                        {/* 페이지 타이틀 시작 */}
                        <h2 className="section-title">주문하기</h2>
                        <div className="subtitle steps">
                            <span className="step round"><span>1.<span className="space"></span>주문서 작성</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>2.<span className="space"></span>가상피팅</span><span class="mute"> (선택)</span></span>
                            <span className="next"></span>
                            <span className="step round primary"><span>3.<span className="space"></span>주문 확정</span></span>
                        </div>
                        {/* 페이지 타이틀 끝 */}
                        <div className="content order-confirm">
                            <form>

                                <h3 className="paragraph-title">주문 내역</h3>
                                {/* 주문 내역 영역 시작 */}
                                <div className="order-info">
                                    {/* 리폼 이미지 영역 */}
                                    <img src="https://i.imgur.com/m2ad328.png" alt="" />
                                    <div className="info-wrap">
                                        <p><strong>sweater / polyester / antiquewhite</strong></p>
                                        <p className="mute">round neck / sleeveless</p>
                                        <p className="mute">crop</p>
                                    </div>
                                </div>
                                {/* 주문 내역 영역 끝 */}
                                {/* 배송지 정보 영역 시작 */}
                                <h3 className="paragraph-title">배송지 정보</h3>
                                <div className="delivery-info">
                                    <div className="info-wrap">
                                        <p><strong>이름: 박소영</strong></p>
                                        <p className="mute">전화번호: 010-0000-0000</p>
                                        <p className="mute">주소지: KT 본사 301호</p>
                                    </div>
                                </div>
                                <Textarea
                                    placeholder="배송 시 요청사항을 입력해주세요."
                                />
                                {/* 배송지 정보 영역 끝 */}
                                {/* 업체 선택 영역 시작 */}
                                <h3 className="paragraph-title">업체 선택</h3>
                                    <SelectField
                                        className="broad-field"
                                        placeholder="리폼을 맡길 업체를 선택해주세요."
                                    />

                                {/* 업체 선택 영역 시작 */}                            
                                {/* 하단 버튼 영역 시작 */}
                                <div className="order-bottom-btn">
                                    <Button
                                        type="submit"
                                        text="주문 확정"
                                        className="btn-next"
                                        url="/service/general/write/complete/"
                                        // onClick={handleSubmit}
                                    />
                                </div>
                                {/* 하단 버튼 영역 끝 */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceGeneralConfirm;