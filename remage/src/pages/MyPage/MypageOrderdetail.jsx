import React from "react";
import "./MypageOrderdetail.css";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const order = [
    {
        orderNumber: "C20240530001",
        status: "완료",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "2024.5.30",
        deliveryDate: "2024.7.5",
        orderTitle: "청바지 리폼1 부탁드립니다.",
        orderContent: "가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.",
        originalImages: [
            "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
            "https://thumb.mt.co.kr/06/2018/03/2018031910133478048_1.jpg",
            "https://lh3.googleusercontent.com/proxy/lgKnRO2kbCAjObi8zrXYqHZTTzQGM15c9sPDNbI9DDZpLLAxGPL7XJUPQBiVRwDiS-SMRuD_pg_VpsMUxYidtuR4AZQMHN00KXJalaVfwXKPNwoG9xnTAYytsjUo0TgHoipYj8dxDs7_uOfPaL91hzmxUR8Ribs_kvDHBuwETTbuLgOZpG1248-U"
        ],  // 빈 이미지를 기본값으로 설정
        referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
    },
    {
        orderNumber: "A20487560301",
        status: "주문중",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "2024.5.30",
        deliveryDate: "",
        orderTitle: "청바지 리폼1 부탁드립니다.",
        orderContent: "가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.",
        originalImages: [
            "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
            "https://thumb.mt.co.kr/06/2018/03/2018031910133478048_1.jpg",
            "https://lh3.googleusercontent.com/proxy/lgKnRO2kbCAjObi8zrXYqHZTTzQGM15c9sPDNbI9DDZpLLAxGPL7XJUPQBiVRwDiS-SMRuD_pg_VpsMUxYidtuR4AZQMHN00KXJalaVfwXKPNwoG9xnTAYytsjUo0TgHoipYj8dxDs7_uOfPaL91hzmxUR8Ribs_kvDHBuwETTbuLgOZpG1248-U"
        ],  // 빈 이미지를 기본값으로 설정
        referenceImage: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2aa6/db65d8c60f42ea40d90fa21083b7750fb1f3a0f201458e2205b166abcd0b.jpg"
    },
    {
        orderNumber: "C483475214768",
        status: "시작전",
        originalClothing: "셔츠",
        desiredOutcome: "크롭 셔츠",
        orderDate: "",
        deliveryDate: "",
        orderTitle: "청바지 리폼1 부탁드립니다.",
        orderContent: "가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.",
        originalImages: [
            "https://cdn.hankyung.com/photo/202206/99.30338841.1.jpg",
            "https://thumb.mt.co.kr/06/2018/03/2018031910133478048_1.jpg",
            "https://lh3.googleusercontent.com/proxy/lgKnRO2kbCAjObi8zrXYqHZTTzQGM15c9sPDNbI9DDZpLLAxGPL7XJUPQBiVRwDiS-SMRuD_pg_VpsMUxYidtuR4AZQMHN00KXJalaVfwXKPNwoG9xnTAYytsjUo0TgHoipYj8dxDs7_uOfPaL91hzmxUR8Ribs_kvDHBuwETTbuLgOZpG1248-U"
        ],  // 빈 이미지를 기본값으로 설정
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
    const currentOrder = order[2];

    const getStatusStyle = (status) => {
        switch (status) {
            case "완료":
                return { backgroundColor: "#dff0d8", color: "#47c282" };
            case "주문중":
                return { backgroundColor: "#d0e8ff", color: "#1e90ff" };
            case "시작전":
                return { backgroundColor: "#FFFFFF", color: "#000000" };
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
                                    <th>배송일자</th>
                                    <td>{currentOrder.deliveryDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="order_detail_body">
                    <h3 className="order_detail_title">{currentOrder.orderTitle}</h3>
                    <div className="order_detail_content">{currentOrder.orderContent}</div>
                    <h3 className="image_title"> 주문 의류 원본 </h3>
                    <div className="order_image_container">
                        {currentOrder.originalImages.map((image, imgIndex) => (
                            <img className="image-placeholder" src={image} alt={`original ${imgIndex}`} key={imgIndex} />
                        ))}
                    </div>
                    <h3 className="image_title"> 리폼 레퍼런스 </h3>
                    <div className="order_image_container">
                        <img className="image-placeholder" src={currentOrder.referenceImage} alt="reference" />
                    </div>
                </div>
                <div className="button_position">
                    {currentOrder.status === "시작전" ? (
                        <Button text="주문하기" onClick={handleOrder} />
                    ) : (
                        <Button text="닫기" onClick={handleBack} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MypageOrderdetail;
