import React, { useState, useEffect } from "react";
import ImageUploader from "../components/common/ImageUploader";
import Button from "../components/common/Button";
import TextButton from "../components/common/TextButton";
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
    const [imageError, setImageError] = useState("");
    const [buttonClass, setButtonClass] = useState("inactive");
    // 이미지 업로드 상태
    const [uploadedImage, setUploadedImage] = useState(null);
    
    // select 필드 상태 관리
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); //submit 버튼을 눌렀을 때 페이지 새로고침 방지
    };

    // '기타 (선택)' 필드에서 '그 외' 선택 시 텍스트 입력 필드 노출
    useEffect(() => {
        const otherOptionDiv = document.querySelector(".new-line");
        if (formData.otherOption === "others") {
            otherOptionDiv.style.display = "block";
        } else {
            otherOptionDiv.style.display = "none";
        }
    }, [formData.otherOption]);

    // 이미지 업로드 시 오류메시지 초기화 및 이미지 반환
    useEffect(() => {
        if (uploadedImage) {
            setImageError("");
        }
    }, [uploadedImage]);

    const handleImageUpload = (imageData) => {
        setUploadedImage(imageData);
    };

    const handleImageAnalyze = () => {
        // [이미지 분석하기] 버튼 클릭 시 숨겨져있던 하단 영역 노출
        if (uploadedImage) {
            setImageError("");
            const infoAreaDiv = document.querySelector(".info-area");
            infoAreaDiv.style.display = "block";
        } else {
            // 업로드된 이미지가 없을 경우 오류메시지
            setImageError("분석할 사진을 선택해주세요.");
        }
    };

    // [디자인 추천받기] 버튼 클릭 시 동작
    const handleGenImage = () => {
        // '기타 (선택)' 필드에서 '그 외' 선택 시 요청사항 입력이 없을 때
        if (formData.otherOption === "others" && !document.getElementById("clothes-others").value) {
            const userConfirmation = window.confirm("기타 요청사항을 입력하지 않았습니다. 이대로 진행하시겠습니까?")
            if (!userConfirmation) {
                return;
            }
        } else {
            const genAreaDiv = document.querySelector(".img-generate-area");
            const bottomBtn = document.querySelector(".order-bottom-btn");
            genAreaDiv.style.display = "block";
            bottomBtn.style.display = "flex";
        }
        // required가 true인 필드만 검사
        // const isAllRequiredFilled = Object.entries(formData).every(([key, { value, required }]) =>
        //     !required || (required && value.trim() !== "")
        // );        
        // // required 필드가 모두 채워져 있을 때만 숨겨진 영역이 나타나도록
        // if (isAllRequiredFilled) {
        //     const genAreaDiv = document.querySelector(".img-generate-area");
        //     genAreaDiv.style.display = "block";
        // }
        // else {
        //     console.log('required 필드가 채워지지 않았습니다.');
        // }
    };

    // 카테고리
    const [category, setCategory] = useState("sweater");

    // const handleCategoryChange = (e) => {
    //     setCategory(e.target.value);
    // };

    // useEffect(() => {
    //     fetchCategory().then(data => {
    //         setCategory(data.category);
    //     });
    // }, []);

    const sleeveOptions = [
        { value: "short", label: "short sleeved" },
        { value: "long", label: "long sleeved" },
        { value: "sleeveless", label: "sleeveless" },
    ];

    const necklineOptions = [
        { value: "collar", label: "collar" },
        { value: "round", label: "round neck" },
        { value: "vneck", label: "v-neck" },
        { value: "square", label: "square neck" },
    ];
    // 카테고리 '스웨터'일 때만 '터틀벡', '모크넥' 옵션 추가
    if (category === "sweater") {
        necklineOptions.push(
            { value: "turtle", label: "turtle neck" },
            { value: "mock", label: "mock neck" }
        );
    }

    const pocketOptions = [
        { value: "none", label: "n/a" },
        { value: "left", label: "left" },
        { value: "right", label: "right" },
    ];

    const patternOptions = [
        { value: "cable", label: "cable" },
        { value: "waffle", label: "waffle" },
        { value: "plain", label: "plain" },
    ]

    const buttonOptions = [
        { value: "none", label: "n/a" },
        { value: "buttons-full", label: "button (full)" },
        { value: "buttons-half", label: "button (half)" },
    ]

    const zipperOptions = [
        { value: "none", label: "n/a" },
        { value: "zippers-full", label: "지퍼 (full)" },
        { value: "zippers-half", label: "지퍼 (half)" },
    ];

    const otherOptions = [
        { value: "none", label: "없음" },
        { value: "crop", label: "크롭" },
        { value: "resize", label: "폼 줄이기" },
        { value: "others", label: "그 외" },
    ];

    return (
        <div className="page service-general-write">
            <section>
                <div className="inner">
                    <div className="wrap">
                        {/* 페이지 타이틀 시작 */}
                        <h2 className="section-title">주문하기</h2>
                        <div className="subtitle steps">
                            <span className="step round primary"><span>1.<span className="space"></span>주문서 작성</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>2.<span className="space"></span>가상피팅</span><span class="mute"> (선택)</span></span>
                            <span className="next"></span>
                            <span className="step round"><span>3.<span className="space"></span>주문 확정</span></span>
                        </div>
                        {/* 페이지 타이틀 끝 */}
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                            {/* <form> */}
                                {/* 의류 사진 업로드 영역 시작 */}
                                <h3 className="paragraph-title">리폼할 의류 사진</h3>
                                <ImageUploader onImageUpload={(handleImageUpload)} />
                                <Button
                                    type="submit"
                                    className="btn-image-analyze"
                                    text="이미지 분석하기"
                                    onClick={handleImageAnalyze}
                                />
                            </form>
                            {imageError && <p className="error-message">{imageError}</p>}
                            {/* 의류 사진 업로드 영역 끝 */}
                            <div className="info-area">
                                {/* 분석 결과 출력 영역 시작 */}
                                <h3 className="paragraph-title">분석 결과</h3>
                                <div className="clothes-info form-container">
                                    <div className="form-item">
                                        <div>
                                            <label>카테고리</label>
                                            <div><p>{category}</p></div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <div>
                                            <label>재질</label>
                                            <div><p>polyester</p></div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <div>
                                            <label>색상</label>
                                            <div><p>antiquewhite</p></div>
                                        </div>
                                    </div>
                                </div>
                                {/* 분석 결과 출력 영역 끝 */}
                                {/* 리폼 요청사항 입력 폼 시작 */}
                                <form onSubmit={handleSubmit}>
                                {/* <form> */}
                                    <h3 className="paragraph-title">요청사항 입력</h3>
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
                                        {
                                            category === "sweater" && (
                                                <div className="form-item">
                                                    <SelectField
                                                        label="패턴"
                                                        options={patternOptions}
                                                        placeholder="패턴 입력"
                                                        required
                                                    />
                                                </div>
                                            )
                                        }
                                        {
                                            category === "sweater" && (
                                                <div className="form-item">
                                                    <SelectField
                                                        label="버튼 수정"
                                                        options={buttonOptions}
                                                        placeholder="버튼 선택"
                                                        required
                                                    />
                                                </div>
                                            )
                                        }
                                        {
                                            category === "sweater" && (
                                                <div className="form-item">
                                                    <SelectField
                                                        label="지퍼 수정"
                                                        options={zipperOptions}
                                                        placeholder="지퍼 선택"
                                                        required
                                                    />
                                                </div>
                                            )
                                        }
                                        {
                                            category != "sweater" && (
                                                <div className="form-item">
                                                    <SelectField
                                                        label="주머니 수정"
                                                        options={pocketOptions}
                                                        placeholder="주머니 선택"
                                                        required
                                                    />
                                                </div>
                                            )
                                        }
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
                                    <div className="order-notice round">
                                        <p>* 주문 내용에 따라 판매자로부터 요청사항에 대한 추가확인 및 상세한 상담을 위한 문의 요청이 발생할 수 있습니다.</p>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="btn-full-width"
                                        text="디자인 추천받기"
                                        onClick={handleGenImage}
                                    />
                                </form>
                                {/* 리폼 요청사항 입력 폼 끝 */}
                            </div>

                            {/* 디자인 추천 영역 시작 */}
                            <div className="img-generate-area">
                                <h3 className="paragraph-title">리폼 디자인 추천</h3>
                                <button className="gen-again"/>
                                {/* <ImageUploader /> */}
                                <img src="https://i.imgur.com/BM8mG7U.png" alt="" />
                                {/* <TextButton className="btn-grey" text="다시 추천받기" /> */}
                                {/* <Button
                                        className="btn-full-width"
                                        text="이 이미지 사용하기"
                                        url="/service/general/write/complete"
                                    /> */}
                            </div>
                            {/* 디자인 추천 영역 끝 */}

                            {/* 하단 버튼 영역 시작 */}
                            <div className="order-bottom-btn">
                                <Button
                                    text="가상피팅"
                                    className="btn-next btn-white"
                                    url="/service/general/write/fitting/"
                                    // onClick={handleSubmit}
                                />
                                <Button
                                    text="주문 진행"
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

export default ServiceGeneralWrite;