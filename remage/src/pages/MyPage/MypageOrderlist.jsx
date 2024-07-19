import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "./MypageOrderlist.css";
import { Link } from "react-router-dom";

const orders = [
  {
    orderId: "C20240530001",
    category: "티셔츠",
    orderDate: "2024.05.30",
    companyName: "업체A",
    status: "주문 완료"
  },
  {
    orderId: "A20487560301",
    category: "티셔츠",
    orderDate: "2024.06.15",
    companyName: "업체B",
    status: "주문 대기"
  },
  {
    orderId: "C483475214768",
    category: "스웨터",
    orderDate: "2024.07.01",
    companyName: "업체C",
    status: "주문 수락"
  },
  {
    orderId: "B30298562345",
    category: "티셔츠",
    orderDate: "2024.08.10",
    companyName: "업체D",
    status: "주문 거절"
  },
  {
    orderId: "D20487560322",
    category: "셔츠",
    orderDate: "2024.09.05",
    companyName: "업체E",
    status: "주문 완료"
  },
  {
    orderId: "E20487560367",
    category: "셔츠",
    orderDate: "2024.10.20",
    companyName: "업체F",
    status: "주문 대기"
  },
  // 추가적인 빈 데이터 예시
  {
    orderId: "C20240530002",
    category: "티셔츠",
    orderDate: "2024.06.30",
    companyName: "업체G",
    status: "주문 완료"
  },
  {
    orderId: "A20487560302",
    category: "셔츠",
    orderDate: "2024.07.15",
    companyName: "업체H",
    status: "주문 대기"
  },
  {
    orderId: "C483475214769",
    category: "티셔츠",
    orderDate: "2024.08.01",
    companyName: "업체I",
    status: "주문 수락"
  },
  {
    orderId: "B30298562346",
    category: "스웨터",
    orderDate: "2024.09.10",
    companyName: "업체J",
    status: "주문 거절"
  },
  {},
];

const MypageOrderlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('orderDateDesc');
  const itemsPerPage = 10;

  // 정렬 함수
  const sortOrders = (orders, sortOrder) => {
    return orders.slice().sort((a, b) => {
      const dateA = new Date(a.orderDate);
      const dateB = new Date(b.orderDate);
      if (sortOrder === 'orderDateAsc') {
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

  return (
    <main className="main-content">
      <h2 className="h2 title">주문내역</h2>
      <div className="list-head">
        <p className="order-sub-title">
          내 주문 <span className="myorder-count">{orders.length}건</span>
        </p>
        <select className="search-sort-method" value={sortOrder} onChange={handleSortChange}>
          <option value='orderDateDesc'>주문일자 순 (내림차순)</option>
          <option value='orderDateAsc'>주문일자 순 (오름차순)</option>
        </select>
      </div>
      <div className="order-table">
        <table className="table_4756">
          <thead>
            <tr className="table_head_4756">
              <th>번호</th>
              <th>고객 주문 번호</th>
              <th>카테고리</th>
              <th>주문 날짜</th>
              <th>주문 업체명</th>
              <th>주문 상태</th>
              <th>주문 상세 보기</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index}>
                <td>{sortedOrders.length - (currentPage - 1) * itemsPerPage - index}</td>
                <td>{order.orderId}</td>
                <td>{order.category}</td>
                <td>{order.orderDate}</td>
                <td>{order.companyName}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/mypage/orderdetail/`}>
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
    </main>
  );
};

export default MypageOrderlist;
