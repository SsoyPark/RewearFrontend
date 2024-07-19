import React from "react";
import "./MypageOrderdetail.css";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const order = {
    orderNumber: "C20240530001",
    status: "주문 거절",
    originalClothing: "shirt",
    orderDate: "2024.5.30",
    orderCompany: "업체A",
    address: "경기도 수원시 영통구 원천동",
    detailaddress: "103동 1206호",
    sleeve_length: "long-sleeved",
    neck_line: "collar neck",
    pocket: "n/a",
    zip: "half",
    button: "half",
    additional_requests: "crop",
    originalImage: "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
    referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
};

const MypageOrderdetail = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/mypage/orderlist");
    };

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

    const getReformRequest = (order) => {
        const requests = [];
        if (order.sleeve_length !== "n/a") requests.push(order.sleeve_length);
        if (order.neck_line !== "n/a") requests.push(order.neck_line);
        if (order.pocket !== "n/a") requests.push(order.pocket);
        if (order.zip !== "n/a") requests.push(`${order.zip} zip`);
        if (order.button !== "n/a") requests.push(`${order.button} button`);
        if (order.additional_requests !== "n/a") requests.push(order.additional_requests);
        return requests.join(", ");
    };

    return (
        <div className="wrap">
            <div className="order_detail">
                <div className="order_detail_head">
                    <h3 className="order_title">주문 상세</h3>
                    <div className="order_subtitle"> 서비스 / 나의 주문관리 / <span className="order_number">{order.orderNumber}</span> </div>
                    <div className="order_table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>주문번호</th>
                                    <td className="order_data">{order.orderNumber}</td>
                                    <th>상태</th>
                                    <td><span className="status" style={getStatusStyle(order.status)}>{order.status}</span></td>
                                </tr>
                                <tr>
                                    <th>의류카테고리</th>
                                    <td className="order_data">{order.originalClothing}</td>
                                    <th>요청사항</th>
                                    <td>{getReformRequest(order)}</td>
                                </tr>
                                <tr>
                                    <th>주문일자</th>
                                    <td className="order_data">{order.orderDate}</td>
                                    <th>주문업체</th> 
                                    <td>{order.orderCompany}</td> 
                                </tr>
                            </tbody>
                        </table>
                        <hr className="address-line" />
                        <table>
                            <tbody>
                                <tr>
                                    <th>주소</th>
                                    <td colSpan="3">{order.address} {order.detailaddress}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="order_detail_body">
                    <div>
                        <h3 className="image_title"> before </h3>
                        <div className="order_image_container">
                            <img className="image-placeholder" src={order.originalImage} alt="original" />
                        </div>
                    </div>
                    <div>
                    <h3 className="image_title"> after </h3>
                    <div className="order_image_container">
                        <img className="image-placeholder" src={order.referenceImage} alt="reference" />
                    </div>
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
