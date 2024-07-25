import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { useEffect, useState } from "react";
import {
  getAcceptedOrders,
  getCompanyOrders,
  getMyOrders,
} from "../../api/service";
import { formatDateString } from "../../utils";

const MypageMain = () => {
  window.scrollTo(0, 0); // 수직 스크롤을 맨 위로 설정

  // 일반 사용자 주문 개수 정보
  const [counts, setCounts] = useState({});
  // 기업 사용자 수락 안한 주문 개수
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  // 기업 사용자 완료 한 주문 개수
  const [completedOrderCount, setCompletedOrderCount] = useState(0);
  const [unCompletedOrderCount, setUnCompletedOrderCount] = useState(0);
  const [isGeneralLoading, setIsGeneralLoading] = useState(true);
  const [isCompanyLoading, setIsCompanyLoading] = useState({
    first: true,
    second: true,
  });

  const { userType } = useAuthStore();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (userType === "company") {
      navigate("/service/company/order");
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

        // 요청 상태 정보 카운팅
        const statusCount = newOrders.reduce((acc, order) => {
          acc[order.status] = (acc[order.status] || 0) + 1;
          return acc;
        }, {});
        setCounts(statusCount);
        setIsGeneralLoading(false);
      } catch (err) {
        alert(err + "주문 정보를 불러오는데 실패했습니다.");
      }
    };

    const fetchCompanyOrders = async () => {
      try {
        const {
          data: { results },
        } = await getCompanyOrders();
        const newPendingOrderCount = results.length;
        setPendingOrderCount(newPendingOrderCount);
        setIsCompanyLoading((prev) => ({ ...prev, first: false }));
      } catch (err) {
        alert(err + "주문 정보를 불러오는데 실패했습니다.");
      }
    };

    const fetchAcceptedOrders = async () => {
      try {
        const {
          data: { results },
        } = await getAcceptedOrders();
        console.log(results);
        const completedTasksCount = results.filter(
          (result) => result.is_completed
        ).length;
        const unCompletedTasksCount = results.filter(
          (result) => !result.is_completed
        ).length;
        setCompletedOrderCount(completedTasksCount);
        setUnCompletedOrderCount(unCompletedTasksCount);
        setIsCompanyLoading((prev) => ({ ...prev, second: false }));
      } catch (err) {
        alert(err + "주문 정보를 불러오는데 실패했습니다.");
      }
    };

    if (userType === "company") {
      fetchAcceptedOrders();
      fetchCompanyOrders();
    } else {
      fetchMyOrders();
    }

    return () => {};
  }, [userType]);

  return (
    <main className="main-content">
      {!isGeneralLoading ||
      (!isCompanyLoading.first && !isCompanyLoading.second) ? (
        <>
          <button className="section-title-button" onClick={handleButtonClick}>
            <h3 className="section-title">주문 내역</h3>
            <span className="material-icons arrow-icon">chevron_right</span>
          </button>
          <div className="order-summary">
            <div className="order-item">
              {userType === "company" ? "주문 대기 중" : "요청 검토 중"}{" "}
              <span>
                {userType === "company" ? pendingOrderCount : counts?.대기 ?? 0}
              </span>
            </div>
            <div className="order-item">
              진행 중{" "}
              <span>
                {userType === "company"
                  ? unCompletedOrderCount
                  : (counts?.수락 ?? 0) + (counts?.거절 ?? 0)}
              </span>
            </div>
            <div className="order-item">
              완료{" "}
              <span>
                {userType === "company"
                  ? completedOrderCount
                  : counts?.완료 ?? 0}
              </span>
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
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default MypageMain;
