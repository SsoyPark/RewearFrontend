import React, { useState, useEffect } from "react";
import FormCheckbox from "../../components/common/FormCheckbox";
import Button from "../../components/common/Button";
import InputError from "../../components/common/InputError";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const TermsOfServicesContent = ({
  title,
  text,
  confirmationText,
  id,
  handleChange,
}) => {
  return (
    <div className={styles["terms-of-services-content"]}>
      <h2 className={styles["terms-of-services-title"]}>{title}</h2>
      <div className={styles["terms-of-services-text"]}>
        <p>{text}</p>
      </div>
      <div className={styles["terms-of-services-checkbox-contents"]}>
        <FormCheckbox
          id={id}
          label={confirmationText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const TermsOfServices = ({
  setCurrentStage,
  emailRecieveChecked,
  smsRecieveChecked,
  setEmailRecieveChecked,
  setSmsRecieveChecked,
}) => {
  useEffect(() => {
    setCurrentStage("약관동의");
  }, [setCurrentStage]);
  const navigate = useNavigate();
  const termsOfServicesText =
      <p>

      <p>이 약관은 Re:WEAR (이하 "회사")가 운영하는 rewear.world (이하 "사이트")에서 제공하는 모든 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      <br></br>

      <strong>제 1 조 (목적)</strong>
      <p>이 약관은 Re:WEAR (이하 "회사")가 운영하는 rewear.world (이하 "사이트")에서 제공하는 모든 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      <br></br>

      <strong>제 2 조 (정의)</strong>
      <p>1. "회원"이란 사이트에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</p>
      <p>2. "아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</p>
      <p>3. "비밀번호"란 회원이 부여받은 아이디와 일치된 회원임을 확인하고 회원의 비밀보호를 위해 회원 자신이 설정한 문자와 숫자의 조합을 의미합니다.</p>
      <br></br>

      <strong>제 3 조 (약관의 게시와 개정)</strong>
      <p>1. 회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 사이트 초기 화면에 게시합니다.</p>
      <p>2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법')" 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
      <p>3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 사이트의 초기 화면에 그 적용일자 7일 전부터 공지합니다.</p>
      <br></br>

      <strong>제 4 조 (서비스의 제공 및 변경)</strong>
      <p>1. 회사는 다음과 같은 서비스를 제공합니다.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>  정보 제공 서비스</li>
        <li>  커뮤니티 서비스</li>
        <li>  기타 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 회원들에게 제공할 일체의 서비스</li>
      </ul>
      <p>2. 회사는 서비스의 내용 및 제공일자를 변경할 수 있으며, 이 경우 변경 사유 및 일자를 명시하여 사전에 공지합니다.</p>
      <br></br>

      <strong>제 5 조 (서비스의 중단)</strong>
      <p>1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
      <p>2. 회사는 서비스 제공의 일시적 중단으로 발생하는 손해에 대하여 책임을 지지 않습니다. 단, 회사에 고의 또는 중대한 과실이 있는 경우에는 그러하지 아니합니다.</p>
      <br></br>

      <strong>제 6 조 (회원가입)</strong>
      <p>1. 회원가입은 회원이 약관의 내용에 대하여 동의를 하고, 가입신청을 한 후 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</p>
      <p>2. 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
        <li>다른 사람의 명의를 사용하여 신청한 경우</li>
        <li>기타 회사가 정한 이용신청 요건이 미비된 경우</li>
      </ul>
      <br></br>

      <strong>제 7 조 (회원 탈퇴 및 자격 상실 등)</strong>
      <p>1. 회원은 언제든지 사이트의 관리자에게 탈퇴를 요청할 수 있으며, 회사는 즉시 회원 탈퇴를 처리합니다.</p>
      <p>2. 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원 자격을 제한 및 정지시킬 수 있습니다.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>가입 신청 시에 허위 내용을 등록한 경우</li>
        <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
        <li>법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
      </ul>
      <br></br>

      <strong>제 8 조 (회원에 대한 통지)</strong>
      <p>1. 회사가 회원에 대한 통지를 하는 경우, 회원이 회사에 제출한 이메일 주소로 할 수 있습니다.</p>
      <p>2. 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 사이트에 게시함으로써 개별 통지에 갈음할 수 있습니다.</p>
      <br></br>

      <strong>제 9 조 (개인정보 보호)</strong>
      <p>회사는 회원의 개인정보를 보호하고 존중합니다. 회사의 개인정보 보호정책은 별도로 공지하며, 회원의 개인정보는 관련 법령 및 회사의 개인정보 보호정책에 따라 보호됩니다.</p>
      <br></br>

      <strong>제 10 조 (회사의 의무)</strong>
      <p>1. 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 최선을 다합니다.</p>
      <p>2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위해 보안 시스템을 갖추어야 합니다.</p>
      <br></br>

      <strong>제 11 조 (회원의 의무)</strong>
      <p>1. 회원은 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>신청 또는 변경 시 허위 내용의 등록</li>
        <li>타인의 정보 도용</li>
        <li>회사가 게시한 정보의 변경</li>
        <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
        <li>기타 불법적이거나 부당한 행위</li>
      </ul>
      <br></br>

      <strong>제 12 조 (저작권의 귀속 및 이용제한)</strong>
      <p>1. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</p>
      <p>2. 회원은 사이트를 이용함으로써 얻은 정보 중 회사에 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
      <br></br>

      <strong>제 13 조 (분쟁해결)</strong>
      <p>1. 회사는 회원으로부터 제출되는 불만사항 및 의견을 신속하게 처리합니다. 다만, 신속한 처리가 곤란한 경우 회원에게 그 사유와 처리 일정을 즉시 통보합니다.</p>
      <p>2. 회사와 회원 간에 발생한 전자상거래 분쟁과 관련하여 회원의 피해구제신청이 있는 경우 공정거래위원회 또는 시ㆍ도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</p>
      <br></br>

      <strong>제 14 조 (재판권 및 준거법)</strong>
      <p>1. 회사와 회원 간에 발생한 분쟁에 관한 소송은 회사의 본사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.</p>
      <p>2. 회사와 회원 간에 제기된 전자상거래 소송에는 대한민국 법을 적용합니다.</p></p>
  const personalInformationText =
    <p>Re:WEAR는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.<br/>
    <br/>
    <strong>제 1조(개인정보의 처리목적)</strong> Re:WEAR는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는  「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br/>
    <br/>
    1. 홈페이지 회원 가입 및 관리<br/>
    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정 대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.<br/>
    2. 재화 또는 서비스 제공<br/>
    물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심을 목적으로 개인정보를 처리합니다.
    3. 고충처리<br/>
    민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보의 목적으로 개인정보를 처리합니다.<br/>
    
    
    </p>;
  const [termsOfServiceChecked, setTermsOfServiceChecked] = useState(false);
  const [userInfoChecked, setUserInfoChecked] = useState(false);
  const [termsOfServiceError, setTermsOfServiceError] = useState("");
  const [userInfoError, setUserInfoError] = useState("");
  const handleNextButton = (event, type) => {
    event.preventDefault();
    let flag = false;
    if (!termsOfServiceChecked) {
      setTermsOfServiceError("이용 약관에 동의해주세요.");
      flag = true;
    } else {
      setTermsOfServiceError("");
    }
    if (!userInfoChecked) {
      setUserInfoError("개인정보 수집 및 이용에 동의해주세요.");
      flag = true;
    } else {
      setUserInfoError("");
    }
    if (flag) {
      return;
    }
    navigate(`/sign-up/userinfo/?type=${type}`, {
      state: { from: "TermsOfServices" },
    });
  };
  return (
    <div className={styles["terms-of-services"]}>
      <TermsOfServicesContent
        title="이용약관"
        text={termsOfServicesText}
        confirmationText="이용약관 동의 (필수)"
        id="terms-checkbox-1"
        handleChange={() => setTermsOfServiceChecked(!termsOfServiceChecked)}
      />
      {termsOfServiceError && <InputError errorMessage={termsOfServiceError} />}
      <TermsOfServicesContent
        title="개인정보 수집 및 이용 동의"
        text={personalInformationText}
        confirmationText="개인정보 수집 및 이용 동의 (필수)"
        id="terms-checkbox-2"
        handleChange={() => setUserInfoChecked(!userInfoChecked)}
      />
      {userInfoError && <InputError errorMessage={userInfoError} />}
      <div className={styles["selective-checkbox-contents"]}>
        {/* <FormCheckbox
          label="SMS 수신 동의 (선택)"
          id="terms-checkbox-3"
          onChange={() => setSmsRecieveChecked(!smsRecieveChecked)}
        />
        <FormCheckbox
          label="이메일 수신 동의 (선택)"
          id="terms-checkbox-4"
          onChange={() => setEmailRecieveChecked(!emailRecieveChecked)}
        /> */}
      </div>
      <div className={styles["next-button"]}>
        <div className={styles["terms-of-services-next-button"]}>
          <Button
            text="일반 회원 가입"
            onClick={(e) => handleNextButton(e, "general")}
          />
        </div>
        <div className={styles["terms-of-services-next-button"]}>
          <Button
            text="기업 회원 가입"
            onClick={(e) => handleNextButton(e, "company")}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsOfServices;
