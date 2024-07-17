import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import styles from "./CompanyOrder.module.css";
import { Link } from 'react-router-dom';

const orders = [
    { customer: "악수하는헬스터", orderNumber: "C20240530021", category: "청바지", orderDate: "2024.5.30" },
    { customer: "박수치는헬스터", orderNumber: "C20240530031", category: "청바지", orderDate: "2024.5.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530041", category: "청바지", orderDate: "2024.5.30" },
    { customer: "박수치는헬스터", orderNumber: "C20240530051", category: "청바지", orderDate: "2024.5.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530061", category: "청바지", orderDate: "2024.6.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530071", category: "청바지", orderDate: "2024.5.30" },
    { customer: "박수치는헬스터", orderNumber: "C20240530204", category: "청바지", orderDate: "2024.6.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530203", category: "청바지", orderDate: "2024.5.30" },
    { customer: "박수치는헬스터", orderNumber: "C20240530202", category: "청바지", orderDate: "2024.7.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530081", category: "청바지", orderDate: "2024.5.30" },
    { customer: "악수하는헬스터", orderNumber: "C20240530091", category: "청바지", orderDate: "2024.5.30" },
];

const CompanyOrder = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchFilter, setSearchFilter] = useState("orderNumber");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orders);
    const itemsPerPage = 10;
    const [sortOrder, setSortOrder] = useState('desc');
    


    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    // 현재 페이지의 아이템들 가져오기
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = [...filteredOrders].reverse().slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 변경 핸들러
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
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1);
    };
    
    const handleReject = (orderNumber) => {
        const confirmReject = window.confirm("정말 이 주문을 거절하시겠습니까?");
        if (confirmReject) {
            setFilteredOrders(filteredOrders.filter(order => order.orderNumber !== orderNumber));
        }
    };    
  
    useEffect(() => {
        let filtered = orders.filter((order) => {
            if (searchFilter === "customer") {
                return order.customer.includes(searchQuery);
            } else if (searchFilter === "orderNumber") {
                return order.orderNumber.includes(searchQuery);
            } else if (searchFilter === "orderDate") {
                return order.orderDate.includes(searchQuery);
            }
            return false;
        });
    
        filtered = filtered.sort((a, b) => {
            const dateA = new Date(a.orderDate);
            const dateB = new Date(b.orderDate);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
    
        setFilteredOrders(filtered);
    }, [searchQuery, searchFilter, sortOrder]);
    

    
    return (
        <div className="page company_order">
            <section>
                <div className="inner">
                    <div className="tab-container">
                        <h3 className="tab-title">서비스</h3>
                        <div className={styles["tab-item"]}>
                            <Link to="/service/company/orderlist">받은 주문관리</Link>
                        </div>
                        <div className={styles["active-tab"]}>
                            <Link to="/service/company/order">주문 받기</Link>
                        </div>
                    </div>
                    <div className="qnatabs">
                        <h2 className="section-title">주문 받기</h2>
                        <div className="custom-search-box">
                            <select
                                className="search-select"
                                value={searchFilter}
                                onChange={handleFilterChange}
                            >
                                <option value="customer">주문고객</option>
                                <option value="orderNumber">고객 주문 번호</option>
                                <option value="orderDate">주문일자</option>
                            </select>
                            <input 
                                type="text" 
                                className="search-input" 
                                placeholder="알고싶은 내용을 검색해보세요." 
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
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
                                <span className="myorder-count">{filteredOrders.length}건</span>의 주문이 검색되었습니다.
                            </p>
                            <select className={styles["search-sort-method"]} value={sortOrder} onChange={handleSortChange}>
                                <option value='desc'>주문일자 순 (내림차순)</option>
                                <option value='asc'>주문일자 순 (오름차순)</option>
                            </select>
                        </div>
                        <table className={styles["table"]}>
                            <thead>
                                <tr className={styles["table-head"]}>
                                    <th>번호</th>
                                    <th>주문고객</th>
                                    <th>고객 주문 번호</th>
                                    <th>의상카테고리</th>
                                    <th>주문일자</th>
                                    <th>수락여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{filteredOrders.length - (currentPage - 1) * itemsPerPage - index}</td>
                                        <td>{order.customer}</td>
                                        <td>{order.orderNumber}</td>
                                        <td>{order.category}</td>
                                        <td>{order.orderDate}</td>
                                        <td>
                                            <button className={styles["accept"]} >수락</button>
                                            <button onClick={() => handleReject(order.orderNumber)} className={styles["decline"]}>거절</button>
                                        </td>
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

export default CompanyOrder;
