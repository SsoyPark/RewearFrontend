import React from "react";
import { useState } from "react";
// import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import { useNavigate } from "react-router-dom";
import "../index.css"
import "./ServiceGeneralWrite.css"

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
                        <span className="next"></span>
                        <span className="step round"><span>2.<span className="space"></span>리폼 디자인 추천받기</span></span>
                        <span className="next"></span>
                        <span className="step round"><span>3.<span className="space"></span>주문 완료</span></span>
                    </div>
                    <div className="content">
                        <div className="paragraph-title"><h3>리폼할 의류 사진</h3></div>
                            <div>

                            </div>
                        <div className="paragraph-title"><h3>의류 정보</h3></div>
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
                        <div className="paragraph-title"><h3>리폼 요청사항</h3></div>
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
                            <div className="new-line full-width">
                                <FormInput
                                    id="clothes-others"
                                    value={'요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.요청사항을 입력해주세요.'}
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