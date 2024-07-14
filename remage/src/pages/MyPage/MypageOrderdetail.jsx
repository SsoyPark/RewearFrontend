import React, { useState } from "react";
import "./MypageOrderdetail.css";


const MypageOrderdetail = () => {
    return (
        <div className ="wrap">
            <div className ="order_detail">
                <div className = "order_detail_head">
                    <h3 className="order_title">주문 상세</h3>
                    <div className="order_subtitle"> 서비스 / 나의 주문관리 / 고객 주문 번호 </div>
                    <div class="order_table">
                        <table>
                            <tr>
                                <th>고객 주문 번호</th>
                                <td>C20240530001</td>
                                <th>상태</th>
                                <td><span class="status">완료</span></td>
                            </tr>
                            <tr>
                                <th>주문 의류 원본</th>
                                <td>셔츠</td>
                                <th>희망 결과</th>
                                <td>크롭 셔츠</td>
                            </tr>
                            <tr>
                                <th>주문일자</th>
                                <td>2024.5.30</td>
                                <th>마감일자</th>
                                <td>2024.7.5</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="order_detail_body">
                    <div className="order_detail_title">청바지 리폼1 부탁드립니다.</div>
                    <div className="order_detail_content">"가능하면 최대한 워싱 부분 살렸으면 좋겠어요. <br /> 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.",</div>



                </div>
            </div>
        </div>
    );
};

export default MypageOrderdetail;
