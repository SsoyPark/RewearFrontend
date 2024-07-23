import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect, useState } from "react";
import { getMyOrders } from "../../api/service";
import { formatDateString } from "../../utils";

const MypageMain = () => {
  const [orders, setOrders] = useState([]);
  const [counts, setCounts] = useState({});
  const { userType } = useAuthStore();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (userType === "company") {
      navigate("/service/company/orderlist");
    } else {
      navigate("/mypage/orderlist");
    }
  };
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const {
          data: { results },
        } = await getMyOrders();
        console.log(results);
        const newOrders = results.map((item) => ({
          orderId: item.id,
          orderDate: formatDateString(item.created_at),
          category: item.category,
          status: item.status_display,
          companyName: item.company_name,
        }));
        setOrders(newOrders);

        // 요청 상태 정보 카운팅
        const statusCount = newOrders.reduce((acc, order) => {
          acc[order.status] = (acc[order.status] || 0) + 1;
          return acc;
        }, {});
        setCounts(statusCount);
        console.log(statusCount);
      } catch (err) {
        alert(err + "주문 정보를 불러오는데 실패했습니다.");
      }
    };
    fetchMyOrders();
    return () => {};
  }, []);
  return (
    <main className="main-content">
      <button className="section-title-button" onClick={handleButtonClick}>
        <h3 className="section-title">주문 내역</h3>
        <span className="material-icons arrow-icon">chevron_right</span>
      </button>
      <div className="order-summary">
        <div className="order-item">
          요청 검토 중 <span>{counts?.대기 ?? 0}</span>
        </div>
        <div className="order-item">
          진행 중 <span>{counts?.수락 ?? 0+ counts?.거절 ?? 0}</span>
        </div>
        <div className="order-item">
          완료 <span>{counts?.완료 ?? 0}</span>
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
