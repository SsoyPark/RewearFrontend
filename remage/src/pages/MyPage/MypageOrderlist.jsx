import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "./MypageOrderlist.css";
import { Link } from "react-router-dom";
import { formatDateString } from "../../utils";
import { getMyOrders } from "../../api/service";

const MypageOrderlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [sortOrder, setSortOrder] = useState("orderDateDesc");
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  // 정렬 함수
  const sortOrders = (orders, sortOrder) => {
    return orders.slice().sort((a, b) => {
      const dateA = new Date(a.orderDate);
      const dateB = new Date(b.orderDate);
      if (sortOrder === "orderDateAsc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  // 정렬된 주문 목록 가져오기
  const sortedOrders = sortOrders(orders, sortOrder);

  // 현재 페이지에 해당하는 아이템을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 계산
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 정렬 변경 핸들러
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
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
        setIsLoading(false);
      } catch (err) {
        alert(err + "주문 내역을 불러오는데 실패했습니다.");
      }
    };
    fetchMyOrders();
    return () => {};
  }, []);

  return (
    <div className="order_content_4536">
      {isLoading ? (
        <></>
      ) : (
        <>
          <h2 className="h2 title">주문내역</h2>
          <div className="list-head">
            <p className="order-sub-title">
              내 주문 <span className="myorder-count">{orders.length}건</span>
            </p>
            <select
              className="search-sort-method"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="orderDateDesc">주문일자 순 (내림차순)</option>
              <option value="orderDateAsc">주문일자 순 (오름차순)</option>
            </select>
          </div>
          <div className="order-table">
            <table className="table_4756">
              <thead>
                <tr className="table_head_4756">
                  <th>번호</th>
                  <th>의류 카테고리</th>
                  <th>주문 날짜</th>
                  <th>주문 업체명</th>
                  <th>주문 상태</th>
                  <th>주문 상세 보기</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      {sortedOrders.length -
                        (currentPage - 1) * itemsPerPage -
                        index}
                    </td>
                    <td>{order.category}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.companyName}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link to={`/mypage/orderdetail/${order.orderId}`}>
                        <div className="view_order_details">
                          주문상세보기 <FaChevronRight />
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handleClick(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MypageOrderlist;
