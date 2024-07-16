import React from "react";
import Button from "../../components/common/Button";

const MypageSidebar = () => {
  return (
    <aside className="mp-sidebar">
      <div className="user-info">
        <div className="user-avatar">
          <span className="material-icons user-avatar-icons">person</span>
        </div>
        <div className="user-name">약수하는햄스터님</div>
        <Button
          text="회원정보 수정"
          url="/mypage/edit/"
          className="editprofile-button"
        ></Button>
        <button className="logout-button">로그아웃</button>
      </div>
      <div className="spacer"></div>
      <button className="delete-account-button">회원 탈퇴</button>
    </aside>
  );
};

export default MypageSidebar;
