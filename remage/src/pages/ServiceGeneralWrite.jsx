import React, { useState, useEffect } from "react";
import ImageUploader from "../components/common/ImageUploader";
import Button from "../components/common/Button";
// import FormInput from "../components/common/FormInput";
import Textarea from "../components/common/Textarea";
import SelectField from "../components/common/SelectField";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";


const ServiceGeneralWrite = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("general");
    const [formData, setFormData] = useState({
        selectField: "",
        otherOption: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonClass, setButtonClass] = useState("inactive");

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            // selectField: value,
            // otherOption: name === "otherOption" ? value : formData.otherOption,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.selectField) {
            setErrorMessage("모든 필수 입력 필드를 채워주세요.");
        } else {
            setErrorMessage(""); // 에러 메시지 초기화
            navigate("/service/general/write/recommend/");
        }
    };

    useEffect(() => {
        if (formData.selectField) {
            setButtonClass("active");
        } else {
            setButtonClass("inactive");
        }
    }, [formData]);

    useEffect(() => {
        const otherOptionDiv = document.querySelector(".new-line");
        if (formData.otherOption === "others") {
            otherOptionDiv.style.display = "block";
        } else {
            otherOptionDiv.style.display = "none";
        }
    }, [formData.otherOption]);

    const sleeveOptions = [
        { value: "short", label: "짧은소매" },
        { value: "long", label: "긴소매" },
        { value: "sleeveless", label: "민소매" },
    ];

    const necklineOptions = [
        { value: "collar", label: "카라" },
        { value: "round", label: "라운드넥" },
        { value: "vneck", label: "브이넥" },
        { value: "square", label: "스퀘어넥" },
        { value: "turtle", label: "터틀넥" },
        { value: "mock", label: "모크넥" },
    ];

    const pocketOptions = [
        { value: "none", label: "없음" },
        { value: "left", label: "왼쪽" },
        { value: "right", label: "오른쪽" },
    ];

    const materialOptions = [
        { value: "none", label: "없음" },
        { value: "buttons", label: "단추" },
        { value: "zippers", label: "지퍼" },
    ];

    const otherOptions = [
        { value: "crop", label: "크롭" },
        { value: "resize", label: "폼 줄이기" },
        { value: "others", label: "그 외" },
    ];

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
                            {/* 의류 사진 업로드 영역 시작 */}
                            <h3 className="paragraph-title">리폼할 의류 사진</h3>
                            <ImageUploader />
                            <Button className="btn-image-analyze" text="이미지 분석하기" />
                            {/* 의류 사진 업로드 영역 끝 */}
                            {/* 의류 정보 출력 영역 시작 */}
                            <h3 className="paragraph-title">분석 결과</h3>
                            <div className="clothes-info form-container">
                                <div className="form-item">
                                    <div>
                                        <label>카테고리</label>
                                        <div><p>티셔츠</p></div>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <div>
                                        <label>재질</label>
                                        <div><p>면</p></div>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <div>
                                        <label>색상</label>
                                        <div><p>보라색</p></div>
                                    </div>
                                </div>
                            </div>
                            {/* 의류 정보 출력 영역 끝 */}
                            {/* 리폼 요청사항 입력 영역 시작 */}
                            <h3 className="paragraph-title">요청사항 입력</h3>

                            <form onSubmit={handleSubmit}>
                                {/* <form> */}
                                <div className="reform-info form-container">
                                    <div className="form-item">
                                        <SelectField
                                            label="소매길이 수정"
                                            options={sleeveOptions}
                                            placeholder="소매길이 선택"
                                            onChange={handleSelectChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-item">
                                        <SelectField
                                            label="넥라인 변경"
                                            options={necklineOptions}
                                            placeholder="넥라인 선택"
                                            required
                                        />
                                    </div>
                                    <div className="form-item">
                                        <SelectField
                                            label="부자재 수정"
                                            options={materialOptions}
                                            placeholder="부자재 선택"
                                            required
                                        />
                                    </div>
                                    <div className="form-item">
                                        <SelectField
                                            label="주머니 선택"
                                            options={pocketOptions}
                                            placeholder="주머니 선택"
                                            required
                                        />
                                    </div>
                                    <div className="form-item">
                                        <SelectField
                                            name="otherOption"
                                            label="기타 (선택)"
                                            options={otherOptions}
                                            placeholder="기타 선택"
                                            onChange={handleSelectChange}
                                            required
                                        />
                                    </div>
                                    <div className="new-line full-width-input">
                                        <Textarea
                                            id="clothes-others"
                                            placeholder="요청사항을 입력해주세요."
                                        />
                                    </div>
                                </div>
                                {/* 리폼 요청사항 입력 영역 끝 */}
                                <div className="form-next">
                                    <Button
                                        text="다음"
                                        className="btn-next"
                                        // url="/service/general/write/recommend/"
                                        // onClick={handleSubmit}
                                        type="submit"
                                    />
                                </div>
                                {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceGeneralWrite;