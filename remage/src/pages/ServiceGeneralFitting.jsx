import React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralFitting.css";
import ImageUploader from "../components/common/ImageUploader";
import { virtualFitting } from "../api/service";
import { base64ToBlob } from "../utils";

const ServiceGeneralFitting = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fittingImage = queryParams.get("fittingImage");
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("general");
  const [image, setImage] = useState(null);
  const [resultImageURL, setResultImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 변수
  const handleImageUpload = (imageData) => {
    setImage(imageData);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("이미지를 업로드해주세요.");
      return;
    }

    const userConfirmed = window.confirm("가상피팅을 시작하겠습니까?");
    if (userConfirmed) {
      setResultImageURL(null);
      setIsLoading(true); // 로딩 시작
      console.log("이미지를 제출합니다.");
      const formData = new FormData();
      const blob = base64ToBlob(image, "image/png");
      formData.append("file1", blob);
      formData.append("file2", blob);

      try {
        const response = await virtualFitting(formData);
        const imageUrl = URL.createObjectURL(response.data);
        setResultImageURL(imageUrl);
        // 테스트
        // const testImageUrl = "https://i.imgur.com/oKOesax.jpg"; // 테스트 이미지 URL
        // await new Promise(resolve => setTimeout(resolve, 2000)); // 2초 지연 시뮬레이션
        // setResultImageURL(testImageUrl);
      } catch (error) {
        console.error(
          "There was a problem with the virtual fitting request:",
          error
        );
        alert("가상피팅에 실패했습니다. 다시 시도해주세요.");
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    } else {
      console.log("이미지 제출이 취소되었습니다.");
    }
  };

  return (
    <div className="page service-general-write service-general-fitting">
      <section>
        <div className="inner">
          <div className="wrap">
            <h2 className="section-title">주문하기</h2>
            <div className="subtitle steps">
              <span className="step round">
                <span>
                  1.<span className="space"></span>주문서 작성
                </span>
              </span>
              <span className="next"></span>
              <span className="step round primary">
                <span>
                  2.<span className="space"></span>가상피팅
                </span>
                <span className="mute"> (선택)</span>
              </span>
              <span className="next"></span>
              <span className="step round">
                <span>
                  3.<span className="space"></span>주문 확정
                </span>
              </span>
            </div>
            <div className="image-container">
              <div className="image-box">
                <img src="/mnt/data/image.png" alt="이미지" />
              </div>
            </div>
            <div className="content fitting">
              <h3 className="paragraph-title">가상피팅</h3>
              <div className="text-wrap">
                <p className="text-margin-bottom">
                  아래 주의사항을 참고해 피팅 서비스를 받을 고객님의 사진을
                  업로드해주세요.{fittingImage}
                </p>
                <p>얼굴과 발을 포함한 전신이 사진에 보이도록 해주세요.</p>
                <p className="text-margin-bottom">
                  양손이 사진에 드러나되 상의를 가리지 않아야 합니다.
                </p>
              </div>
              <div className={`img-container ${isLoading ? "loading" : ""}`}>
                <ImageUploader
                  className="uploader-long"
                  onImageUpload={handleImageUpload}
                />
                {resultImageURL ? (
                  <img src={resultImageURL} alt="가상피팅 사진" />
                ) : (
                    <div className="no-result">
                        <div className="result-wrap">
                            <span></span>
                            <p>가상피팅 완료 시<br/>이곳에 결과가 나타납니다.</p>
                            <Button
                                text={isLoading ?
                                    <>
                                        가상피팅 실행 중
                                        <div className="ellipsis">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </> 
                                    : "가상피팅 실행"}
                                className={`${
                                isLoading ? "loading" : ""
                                } btn-white`}
                                onClick={handleSubmit}
                                disabled={isLoading} // 로딩 중이면 버튼 비활성화
                            />
                        </div>
                    </div>
                )}
              </div>
              <div className="order-bottom-btn">
                <Button
                  text="다음"
                  className="btn-next"
                  url="/service/general/write/confirm/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceGeneralFitting;
