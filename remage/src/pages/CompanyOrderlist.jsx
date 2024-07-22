import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./CompanyOrder.module.css";
import { Link } from "react-router-dom";
import { getAcceptedOrders } from "../api/service";
import { encodeOrderNum, formatDateString } from "../utils";

const CompanyOrderlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("orderNumber");
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [sortOrder, setSortOrder] = useState("orderDate");
  const [sortDirection, setSortDirection] = useState("desc"); // 초기 정렬 방향을 내림차순으로 설정
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로
  }, [currentPage]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
  };

  const handleSortDirectionChange = (e) => {
    setSortDirection(e.target.value);
    setCurrentPage(1);
  };
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const {
          data: { results },
        } = await getAcceptedOrders();
        console.log(results);
        const newOrders = results.map((item) => ({
          orderNumber: encodeOrderNum(item.id),
          customer: item.user_nickname,
          orderDate: formatDateString(item.created_at),
          dueDate: formatDateString(item.deadline),
          status: item.is_completed,
          category: item.category,
          status: item.status_display,
          orderId: item.id,
        }));
        setOrders(newOrders);
      } catch (err) {
        alert(err + "주문 내역을 불러오는데 실패했습니다.");
      }
    };
    fetchMyOrders();
    return () => {};
  }, []);
  useEffect(() => {
    let filtered = orders.filter((order) => {
      if (searchFilter === "customer") {
        return order.customer.includes(searchQuery);
      } else if (searchFilter === "orderNumber") {
        return order.orderNumber.includes(searchQuery);
      }
      return false;
    });

    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a[sortOrder]);
      const dateB = new Date(b[sortOrder]);
      if (sortDirection === "desc") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    setFilteredOrders(filtered);
  }, [searchQuery, searchFilter, sortOrder, sortDirection, orders]);

  return (
    <div className="page company_order">
      <section>
        <div className="inner">
          <div className="tab-container">
            <h3 className="tab-title">서비스</h3>
            <div className={styles["active-tab"]}>
              <Link to="/service/company/orderlist">받은 주문관리</Link>
            </div>
            <div className={styles["tab-item"]}>
              <Link to="/service/company/order">주문 받기</Link>
            </div>
          </div>
          <div className="qnatabs">
            <h2 className="section-title">받은 주문 관리</h2>
            <div className="custom-search-box">
              <select
                className="search-select"
                value={searchFilter}
                onChange={handleFilterChange}
              >
                <option value="customer">주문고객</option>
                <option value="orderNumber">고객 주문 번호</option>
              </select>
              <input
                type="text"
                className="search-input"
                placeholder="알고싶은 내용을 검색해보세요."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit();
                  }
                }}
              />
              <button className="search-button" onClick={handleSearchSubmit}>
                <FaSearch size={24} />
              </button>
            </div>
            <div className={styles["list-head"]}>
              <p className={styles["order-sub-title"]}>
                <span className="myorder-count">{filteredOrders.length}건</span>
                의 주문이 검색되었습니다.
              </p>
              <select
                className={styles["search-sort-method"]}
                value={sortDirection}
                onChange={handleSortDirectionChange}
              >
                <option value="desc">주문일자 (내림차순)</option>
                <option value="asc">주문일자 (오름차순)</option>
              </select>
            </div>
            <table className={styles["table"]}>
              <thead>
                <tr className={styles["table-head"]}>
                  <th>번호</th>
                  <th>주문고객</th>
                  <th>고객 주문 번호</th>
                  <th>의류 카테고리</th>
                  <th>주문일자</th>
                  <th>마감일자</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      {filteredOrders.length -
                        (currentPage - 1) * itemsPerPage -
                        index}
                    </td>
                    <td>{order.customer}</td>
                    <td>{order.orderNumber}</td>
                    <td>{order.category}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.dueDate}</td>
                    <td>{order.status ? "완료" : "진행중"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles["pagination"]}>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? styles["active"] : ""}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOrderlist;
