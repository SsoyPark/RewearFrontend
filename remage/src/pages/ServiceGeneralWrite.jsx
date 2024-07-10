import React from "react";
import { useState } from "react";
// import Button from "../components/common/Button";
import ImageUploader from "../components/common/ImageUploader";
import FormInput from "../components/common/FormInput";
import Textarea from "../components/common/Textarea";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";

const ServiceGeneralWrite = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("general");

  return (
    <div className="page service-general-write">
        <section>
            <div className="inner">
                <div className="wrap">
                    <h2 className="section-title">주문하기</h2>
                    <div className="subtitle steps">
                        <span className="step round primary"><span>1.<span className="space"></span>주문서 작성하기</span></span>
                        <span className="next">></span>
                        <span className="step round"><span>2.<span className="space"></span>리폼 디자인 추천받기</span></span>
                        <span className="next">></span>
                        <span className="step round"><span>3.<span className="space"></span>주문 완료</span></span>
                    </div>
                    <div className="content">
                        <h3 className="paragraph-title">리폼할 의류 사진</h3>
                            <ImageUploader />
                        <h3 className="paragraph-title">의류 정보</h3>
                        <div className="clothes-info col-container">
                            <div className="col">
                                <FormInput
                                    id="clothes-category"
                                    label="카테고리"
                                    value={' '}
                                />
                                <FormInput
                                    id="clothes-sleeve"
                                    label="소매길이"
                                    value={' '}
                                />

                            </div>
                            <div className="col">
                                <FormInput
                                    id="clothes-neckline"
                                    label="넥라인"
                                    value={' '}
                                />
                                <FormInput
                                    id="clothes-pocket"
                                    label="주머니"
                                    value={' '}
                                />
                                <FormInput
                                    id="clothes-others"
                                    label="부자재"
                                    value={' '}
                                />

                            </div>
                        </div>
                        <h3 className="paragraph-title">리폼 요청사항</h3>
                        <div className="reform-info col-container">
                            <div className="col">
                                <FormInput
                                    id="clothes-sleeve"
                                    label="소매길이 수정"
                                    value={' '}
                                />

                            </div>
                            <div className="col">
                                <FormInput
                                    id="clothes-neckline"
                                    label="넥라인 변경"
                                    value={' '}
                                />
                            </div>
                            <div className="col">
                                <FormInput
                                    id="clothes-pocket"
                                    label="주머니 수정"
                                    value={' '}
                                />
                            </div>
                            <div className="col">
                                <FormInput
                                    id="clothes-others"
                                    label="부자재 수정"
                                    value={' '}
                                />
                            </div>
                            <div className="new-line">
                                <FormInput
                                    id="clothes-materials"
                                    label="기타 요청사항 선택"
                                    value={' '}
                                />
                            </div>
                            <div className="new-line full-width-input">
                                <Textarea
                                    id="clothes-others"
                                    placeholder=" "
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ServiceGeneralWrite;