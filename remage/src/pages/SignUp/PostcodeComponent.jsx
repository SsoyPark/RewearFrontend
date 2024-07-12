import React from "react";
import Button from "../../components/common/Button";

const PostcodeComponent = ({ setAddress, ...props }) => {
  const handleAddress = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 검색 결과 항목을 클릭했을 때 실행할 코드를 작성하는 부분입니다.
        setAddress(data.address); // 검색 결과를 콘솔에 출력 (원하는 기능을 여기에 작성하세요)
      },
    }).open();
  };
  const handleClick = () => {
    // Script가 이미 로드되어 있는지 확인
    if (!window.daum) {
      const script = document.createElement("script");
      script.src =
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      script.onload = () => {
        handleAddress();
      };
      document.head.appendChild(script);
    } else {
      handleAddress();
    }
  };

  return <Button {...props} onClick={handleClick} />;
};

export default PostcodeComponent;
