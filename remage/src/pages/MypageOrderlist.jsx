import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './MypageOrderlist.css';
import './MyPage/Mypage.css';

const orders = [
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},
  {
    /*이미지 정보가 필요하다*/
    date: '저장 날짜: 2024.0.00',
    description: '청바지 리폼1 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '임시저장',
    /*주문상세 링크도 필요한가..? 어떻게 하는지 모르겠다*/
    url: '/order/1'
  },
  {
    date: '주문 날짜: 2024.0.00',
    description: '청바지 리폼2 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '주문대기',
    url: '/order/2'
  },
  {
    date: '저장 날짜: 2024.0.00',
    description: '청바지 리폼3 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '주문완료',
    url: '/order/3'
  },
  {
    date: '주문 날짜: 2024.0.00',
    description: '청바지 리폼4 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '주문대기',
    url: '/order/4'
  },
  {
    date: '저장 날짜: 2024.0.00',
    description: '청바지 리폼5 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '임시저장',
    url: '/order/5'
  },
  {
    date: '주문 날짜: 2024.0.00',
    description: '청바지 리폼6 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '배송완료',
    url: '/order/6'
  },
  {
    date: '저장 날짜: 2024.0.00',
    description: '청바지 리폼7 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '임시저장',
    url: '/order/7'
  },
  {
    image: '1.jpg', /* 백에서 api를 통해 가져와줄거라 믿어봅니다*/
    date: '주문 날짜: 2024.0.00',
    description: '청바지 리폼8 부탁드립니다.',
    detail: '가능하면 최대한 워싱 부분 살렸으면 좋겠어요. 단추도 디테일로 살릴 수 있으면 살리고 싶습니다.',
    status: '주문완료',
  }
  /*추가 주문 내역이 있으면 여기 생성될 수 있도록 구성*/
];

const MypageOrderlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 현재 페이지에 해당하는 아이템을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice().reverse().slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 계산
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mypage-orderlist">
      <section>
        <div className="inner">
          <div className="dashboard-content">
            <aside className="mp-sidebar">
              <div className="user-info">
                <div className="user-avatar">
                  <span className="material-icons user-avatar-icons">person</span>
                </div>
                <div className="user-name">약수하는햄스터님</div>
                <button className="editprofile-button">회원정보 수정</button>
                <button className="logout-button">로그아웃</button>
              </div>
              <div className="spacer"></div>
              <button className="delete-account-button">회원 탈퇴</button>
            </aside>
            {/* 여기서부터 주문 리스트 목록 */}
            <main className="main-content">
              <h2 className="h2 title">주문내역</h2>
              <p className="order-sub-title">내 주문 <span className="myorder-count">{orders.length}건</span></p>
              <div className="order_list">
                {currentOrders.map((order, index) => (
                  <div key={index} className="order_item">
                    <img src={order.image || 'default-image.jpg'} className="order_image" />
                    <div className="order_box">
                      <p className="order_date">{order.date}</p>
                      <p className="order_title">{order.description}</p>
                      <p className="order_detail">{order.detail}</p>
                    </div>
                    <div className="order_status">{order.status}</div>
                    {/* 주문 연결이 필요해요. */}
                    <div  className="view_order_details">
                      주문상세보기 <FaChevronRight />
                    </div>                   
                  </div>
                ))}                  
              </div>
              <div className="pagination">
                {currentPage !== 1 && (
                  <button
                    onClick={() => handleClick(currentPage - 1)}
                    className="page-number"
                  >
                    &lt;
                  </button>
                )}
                {pageNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={`page-number ${number === currentPage ? 'active' : ''}`}
                  >
                    {number}
                  </button>
                ))}
                {currentPage !== pageNumbers.length && (
                  <button
                    onClick={() => handleClick(currentPage + 1)}
                    className="page-number"
                  >
                    &gt;
                  </button>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MypageOrderlist;
