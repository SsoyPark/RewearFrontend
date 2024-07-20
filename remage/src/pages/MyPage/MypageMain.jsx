import React from "react";
import { useNavigate } from "react-router-dom";

const MypageMain = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/mypage/orderlist");
  };

  return (
    <main className="main-content">
      <button className="section-title-button" onClick={handleButtonClick}>
        <h3 className="section-title">주문 내역</h3>
        <span className="material-icons arrow-icon">chevron_right</span>
      </button>
      <div className="order-summary">
        <div className="order-item">
          임시저장 <span>3</span>
        </div>
        <div className="order-item">
          요청 검토 중 <span>1</span>
        </div>
        <div className="order-item">
          진행 중 <span>1</span>
        </div>
        <div className="order-item">
          완료 <span>0</span>
        </div>
      </div>
      <h3 className="section-title">나의 활동</h3>
      <div className="activities-section">
        <div className="activities-grid">
          <div className="activity-item">
            📑 저장한 디자인
            <span className="material-icons activity-item-arrow-icon">
              chevron_right
            </span>
          </div>
          <div className="activity-item">
            ⭐ 북마크
            <span className="material-icons activity-item-arrow-icon">
              chevron_right
            </span>
          </div>
          <div className="activity-item">
            😃 내가 쓴 리뷰
            <span className="material-icons activity-item-arrow-icon">
              chevron_right
            </span>
          </div>
          <div className="activity-item">
            ✉️ 문의 내역
            <span className="material-icons activity-item-arrow-icon">
              chevron_right
            </span>
          </div>
        </div>
      </div>
      {/* <button className="section-title-button">
        <h3 className="section-title">공지사항</h3>
        <span className="material-icons arrow-icon">chevron_right</span>
      </button>
      <div className="notices-section">
        <ul className="notices-list">
          <li className="notice-item">공지사항 1</li>
          <li className="notice-item">공지사항 2</li>
          <li className="notice-item">공지사항 3</li>
        </ul>
      </div> */}
    </main>
  );
};

export default MypageMain;
