import React from 'react';
import './Mypage.css';

const Mypage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <aside className="sidebar">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-name">약수하는햄스터님</div>
            <button className="logout-button">로그아웃</button>
          </div>
        </aside>

        <main className="main-content">
        <h3 className="section-title">주문 내역</h3>
          <div className="order-summary">
            <div className="order-item">임시저장 <span>3</span></div>
            <div className="order-item">요청 검토 중 <span>1</span></div>
            <div className="order-item">진행 중 <span>1</span></div>
            <div className="order-item">완료 <span>0</span></div>
          </div>
          <div className="highlighted-section">
            {/* 강조된 섹션 내용 */}
          </div>
          <h3 className="section-title">나의 활동</h3>
          <div className="activities-section">
            <div className="activities-grid">
              <div className="activity-item">📑 저장한 디자인</div>
              <div className="activity-item">⭐ 북마크</div>
              <div className="activity-item">😃 내가 쓴 리뷰</div>
              <div className="activity-item">✉️ 문의 내역</div>
            </div>
            <div className="activity-item full-width">🔔 공지사항</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mypage;
