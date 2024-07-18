import React from "react";
import "./MypageOrderdetail.css";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const order = [
    {
        orderNumber: "C20240530001",
        status: "주문 완료",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "2024.5.30",
        orderCompany: "업체A", // 주문 업체
        originalImage: "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
        referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
    },
    {
        orderNumber: "A20487560301",
        status: "주문 대기",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "2024.5.30",
        orderCompany: "업체B", // 주문 업체
        originalImage: "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
        referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
    },
    {
        orderNumber: "C483475214768",
        status: "주문 수락",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "",
        orderCompany: "업체C", // 주문 업체
        originalImage: "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
        referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
    }
]

const MypageOrderdetail = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/mypage/orderlist");
    };
    const handleOrder = () => {
        navigate("/service/general/write/");
    };
    const currentOrder = order[1];

    const getStatusStyle = (status) => {
        switch (status) {
            case "주문 완료":
                return { backgroundColor: "#dff0d8", color: "#47c282" };
            case "주문 대기":
                return { backgroundColor: "#d0e8ff", color: "#1e90ff" };
            case "주문 수락":
                return { backgroundColor: "#fff3cd", color: "#856404" };
            case "주문 거절":
                return { backgroundColor: "#f8d7da", color: "#721c24" };
            default:
                return {};
        }
    };

    return (
        <div className="wrap">
            <div className="order_detail">
                <div className="order_detail_head">
                    <h3 className="order_title">주문 상세</h3>
                    <div className="order_subtitle"> 서비스 / 나의 주문관리 / <span className="order_number">{currentOrder.orderNumber}</span> </div>
                    <div className="order_table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>고객 주문 번호</th>
                                    <td className="order_data">{currentOrder.orderNumber}</td>
                                    <th>상태</th>
                                    <td><span className="status" style={getStatusStyle(currentOrder.status)}>{currentOrder.status}</span></td>
                                </tr>
                                <tr>
                                    <th>주문 의류 원본</th>
                                    <td className="order_data">{currentOrder.originalClothing}</td>
                                    <th>희망 의류 결과</th>
                                    <td>{currentOrder.desiredOutcome}</td>
                                </tr>
                                <tr>
                                    <th>주문일자</th>
                                    <td className="order_data">{currentOrder.orderDate}</td>
                                    <th>주문 업체</th> {/* 변경된 부분 */}
                                    <td>{currentOrder.orderCompany}</td> {/* 변경된 부분 */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="order_detail_body">
                    <h3 className="image_title"> 주문 의류 원본 </h3>
                    <div className="order_image_container">
                        <img className="image-placeholder" src={currentOrder.originalImage} alt="original" />
                    </div>
                    <h3 className="image_title"> 리폼 레퍼런스 </h3>
                    <div className="order_image_container">
                        <img className="image-placeholder" src={currentOrder.referenceImage} alt="reference" />
                    </div>
                </div>
                <div className="button_position">
                    <Button text="닫기" onClick={handleBack} />
                </div>
            </div>
        </div>
    );
};

export default MypageOrderdetail;
