import React, { useState, useEffect } from "react";
import Button from "../components/common/Button";
// import FormInput from "../components/common/FormInput";
import Textarea from "../components/common/Textarea";
import SelectField from "../components/common/SelectField";
import { useNavigate } from "react-router-dom";
import "./ServiceGeneralWrite.css";
import "./ServiceGeneralConfirm.css";
import useServiceGeneralWriteStore from "../stores/ServiceGeneralWriteStore";
import { getUserProfile, getCompanyNames } from "../api/auth";
import { postRequestConfirm } from "../api/service";

const lookupTable = {
  short: "short sleeved",
  long: "long sleeved",
  sleeveless: "sleeveless",
  collar: "collar",
  round: "round neck",
  vneck: "v-neck",
  square: "square neck",
  turtle: "turtle neck", // sweater 카테고리일 때 추가
  mock: "mock neck", // sweater 카테고리일 때 추가
  none: "n/a",
  left: "pocket left",
  right: "pocket right",
  cable: "pattern cable",
  waffle: "pattern waffle",
  plain: "pattern plain",
  "buttons-full": "button (full)",
  "buttons-half": "button (half)",
  "zippers-full": "지퍼 (full)",
  "zippers-half": "지퍼 (half)",
  crop: "크롭",
  resize: "폼 줄이기",
  others: "그 외",
};

const ServiceGeneralConfirm = () => {
  const navigate = useNavigate();
  const {
    analysisInfo,
    reformForm,
    createdImageUrl,
    resetState,
  } = useServiceGeneralWriteStore();
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [companyNames, setCompanyNames] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState(null);

  const handleCompanySelect = (e) => {
    const newSelectedCompany = e.target.value;
    setSelectedCompanyName(newSelectedCompany);
  };
  const handleSubmit = async () => {
    if (!selectedCompanyName) {
      alert("업체를 선택해주세요.");
      return;
    }
    const userConfirmation = window.confirm("주문을 확정하시겠습니까?");
    if (!userConfirmation) {
      return;
    }
    try {
      const response = await postRequestConfirm({
        company_name: selectedCompanyName,
      });
      console.log(response);
      window.scrollTo(0, 0);
      navigate("/service/general/write/complete/");
      resetState();
    } catch (err) {
      alert("리폼 등록에 실패했습니다." + err);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const {
          data: { nickname, phone, address, detail_address },
        } = await getUserProfile();
        setNickname(nickname);
        setPhoneNumber(phone);
        setAddress(address);
        setDetailAddress(detail_address);
      } catch (err) {
        alert("개인정보를 불러오는데 실패했습니다." + err);
      }
    };
    const fetchCompanyNames = async () => {
      try {
        const { data } = await getCompanyNames();
        setCompanyNames(data.map((item) => ({ value: item, label: item })));
      } catch (err) {
        alert("주문회사 정보를 불러오는데 실패했습니다." + err);
      }
    };
    fetchProfile();
    fetchCompanyNames();
  }, []);
  return (
    <div className="page service-general-write">
      <section>
        <div className="inner">
          <div className="wrap">
            {/* 페이지 타이틀 시작 */}
            <h2 className="section-title">주문하기</h2>
            <div className="subtitle steps">
              <span className="step round">
                <span>
                  1.<span className="space"></span>주문서 작성
                </span>
              </span>
              <span className="next"></span>
              <span className="step round">
                <span>
                  2.<span className="space"></span>가상피팅
                </span>
                <span className="mute"> (선택)</span>
              </span>
              <span className="next"></span>
              <span className="step round primary">
                <span>
                  3.<span className="space"></span>주문 확정
                </span>
              </span>
            </div>
            {/* 페이지 타이틀 끝 */}
            <div className="content order-confirm">
              <form>
                <h3 className="paragraph-title">주문 내역</h3>
                {/* 주문 내역 영역 시작 */}
                <div className="order-info">
                  {/* 리폼 이미지 영역 */}
                  <img src={createdImageUrl} alt="" />
                  <div className="info-wrap">
                    <p>
                      <strong>
                        {analysisInfo.category} / {analysisInfo.material} /{" "}
                        {analysisInfo.color}
                      </strong>
                    </p>
                    <p className="mute">
                      {[reformForm.neck_line]} /{" "}
                      {[reformForm.button] && [reformForm.button] + "/"}{" "}
                      {[reformForm.sleeve_length]}
                    </p>
                    <p className="mute">
                      {analysisInfo.category === "sweater"
                        ? [reformForm.zip]
                        : [reformForm.pocket]}{" "}
                      / {[reformForm.pattern] && [reformForm.pattern] + "/"}{" "}
                      {[reformForm.addt_design]}
                    </p>
                  </div>
                </div>
                {/* 주문 내역 영역 끝 */}
                {/* 배송지 정보 영역 시작 */}
                <h3 className="paragraph-title">배송지 정보</h3>
                <div className="delivery-info">
                  <div className="info-wrap">
                    <p>
                      <strong>이름 : {nickname}</strong>
                    </p>
                    <p className="mute">전화번호 : {phoneNumber}</p>
                    <p className="mute">
                      주소 : {address} | {detailAddress}{" "}
                    </p>
                  </div>
                </div>
                <Textarea placeholder="배송 시 요청사항을 입력해주세요." />
                {/* 배송지 정보 영역 끝 */}
                {/* 업체 선택 영역 시작 */}
                <h3 className="paragraph-title">업체 선택</h3>
                <SelectField
                  className="broad-field"
                  placeholder="리폼을 맡길 업체를 선택해주세요."
                  options={companyNames}
                  onChange={handleCompanySelect}
                />
                {/* 업체 선택 영역 시작 */}
                {/* 하단 버튼 영역 시작 */}
                <div className="order-bottom-btn">
                  <Button
                    type="button"
                    text="주문 확정"
                    className="btn-next"
                    // url="/service/general/write/complete/"
                    onClick={handleSubmit}
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
