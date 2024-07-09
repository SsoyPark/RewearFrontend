import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.css';

const Mypage = () => {
    const notices = [
        '공지사항 1',
        '공지사항 2',
        '공지사항 3',
        '공지사항 4',
        '공지사항 5',
      ];
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <aside className="sidebar">
                    <div className="user-info">
                        <div className="user-avatar">
                            <span className="material-icons user-avatar-icons">person</span>
                        </div>
                        <div className="user-name">약수하는햄스터님</div>
                        <button className="editprofile-button">회원정보 수정</button>
                        <button className="logout-button">로그아웃</button>
                    </div>
                    <div className="spacer"></div>
                    <button className="delete-account-button">회원 탈퇴</button>
                </aside>

                <main className="main-content">
                    <button className="section-title-button">
                        <h3 className="section-title">주문 내역</h3>
                        <span className="material-icons arrow-icon">chevron_right</span>
                    </button>
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
                            <div className="activity-item">
                                📑 저장한 디자인
                                <span className="material-icons activity-item-arrow-icon">chevron_right</span>    
                            </div>
                            <div className="activity-item">
                                ⭐ 북마크
                                <span className="material-icons activity-item-arrow-icon">chevron_right</span> 
                            </div>
                            <div className="activity-item">
                                😃 내가 쓴 리뷰
                                <span className="material-icons activity-item-arrow-icon">chevron_right</span> 
                            </div>
                            <div className="activity-item">
                                ✉️ 문의 내역
                                <span className="material-icons activity-item-arrow-icon">chevron_right</span> 
                            </div>
                        </div>
                    </div>
                    <button className="section-title-button">
                            <h3 className="section-title">공지사항</h3>
                            <span className="material-icons arrow-icon">chevron_right</span>
                    </button>
                    <div className="notices-section">    
                        <ul className="notices-list">
                            <li className="notice-item">
                                공지사항 1
                            </li>
                            <li className="notice-item">
                                공지사항 2
                            </li>
                            <li className="notice-item">
                                공지사항 3
                            </li>
                        </ul>
                    </div>
            </main>
        </div>
        </div>
    );
};

export default Mypage;
