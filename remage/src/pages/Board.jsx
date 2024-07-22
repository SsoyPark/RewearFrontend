import React, { useState } from 'react';
import './Board.css';
import { FaSearch } from 'react-icons/fa';

const Board = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('all'); // 추가된 검색 옵션 상태
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  // 일반 사용자와 기업 사용자의 FAQ 데이터를 분리
  const generalFaqs = [
    { question: "AI가 알아서 디자인해주는데 요청사항 입력은 왜 필요한가요?", 
      answer: "사용자가 입력한 요청사항의 내용에 따라 AI가 추천 디자인을 생성합니다. 요청사항 입력이 되지 않을 경우, 리폼 이미지가 제대로 생성되지 않을 수 있습니다." },
    { question: "업로드할 수 있는 이미지 형식에 제한이 있나요?", 
      answer: "추천 디자인 생성, 가상피팅 서비스에는 jpg, png 형식의 이미지 파일을 사용할 수 있습니다." },
    { question: "받은 제품이 예상한 것과 달라요. 다시 리폼해 주세요.", 
      answer: "단순 변심의 경우 무상으로 리폼을 다시 진행해 드리기는 어렵습니다. 업체 과실로 인해 재작업을 희망하신다면 해당 업체에 문의 바랍니다." },
    { question: "디자인을 몇 번 새로 생성했는데 갑자기 이미지가 안 나와요.", 
      answer: "리폼 이미지는 하루에 최대 5건까지 생성할 수 있습니다. 추가로 이미지를 생성하고 싶을 경우 비용이 청구됩니다." },
    { question: "입금을 청구금액보다 많이 했어요.", 
      answer: "무통장입금하시는 경우 백 원단위 이하의 금액이 입금이 안 되기 때문에 주문한 금액보다 더 입금하시는 경우가 있는데요, 추가 입금된 잔돈은 예치금으로 적립해 드립니다. 또한 예치금은 요청 시 계좌 환불 가능합니다." },
    { question: "배송기간이 얼마나 걸리나요?", 
      answer: "배송기간은 택배사 사정에 따라 달라질 수 있습니다. 평균 배송일은 주문일로부터 1~2일입니다. 배송 접수일 등의 내용은 주문하신 업체에 문의 부탁드립니다." },
    { question: "해외 배송도 되나요?", 
      answer: "해외 배송은 우체국 EMS로 발송이 되며 배송기간은 3~15일 내외로 소요됩니다. 또한, 해외 배송비는 나라 및 제품 무게에 따라 배송비에 차이가 있습니다." },
    { question: "고객센터의 상담 시간을 알고 싶어요.", 
      answer: "고객센터 전화번호 : 1544-9180\n상담 시간 : 평일 오전 9시 30분 ~ 오후 6시 (점심시간 : 오전 11시 30분 ~ 오후 1시 30분 / 주말, 공휴일 휴무)"
    }
  ];

  const corporateFaqs = [
    { question: "기업 주문 관리는 어떻게 하나요?", answer: "서비스 페이지의 '주문 받기'와 '받은 주문 관리' 페이지를 통해 업체에 연결된 주문을 확인하고 관리할 수 있습니다." },
    { question: "주문을 어떻게 처리하나요?", answer: "주문을 받은 후, 고객의 요청에 따라 제품을 준비하고, 정해진 기한 내에 배송을 완료해야 합니다. 주문 상태는 '받은 주문 관리' 페이지에서 확인할 수 있습니다." },
    { question: "배송 상태를 어떻게 확인하나요?", answer: "배송 상태는 '받은 주문 관리' 페이지에서 확인할 수 있으며, 고객에게도 자동으로 업데이트됩니다." },
    { question: "주문 취소는 어떻게 하나요?", answer: "주문 취소는 '받은 주문 관리' 페이지에서 가능하며, 취소 사유를 입력하면 고객에게 자동으로 통보됩니다." },
    { question: "환불 절차는 어떻게 되나요?", answer: "환불 요청이 들어오면, '환불 관리' 페이지에서 요청을 승인하거나 거부할 수 있습니다. 환불 승인 시, 고객에게 자동으로 환불 절차가 진행됩니다." },
    { question: "고객 문의는 어떻게 처리하나요?", answer: "고객 문의는 '고객센터' 페이지에서 확인할 수 있으며, 각 문의에 대한 답변을 작성하여 고객에게 전송할 수 있습니다." },
    { question: "배송 비용은 어떻게 청구되나요?", answer: "배송 비용은 주문 시 고객에게 청구되며, 배송 방법에 따라 다를 수 있습니다. 자세한 내용은 '배송 정책' 페이지를 참조하세요." },
    { question: "고객센터의 상담 시간을 알고 싶어요.", 
      answer: "고객센터 전화번호 : 080-000-9999 상담 시간 : 평일 오전 9:00 ~ 18:00 (점심시간 : 12:00 ~ 13:00 / 주말, 공휴일 휴무)"
    }
  ];

  // 현재 활성화된 탭에 따라 FAQ 데이터를 설정
  const faqs = activeTab === 'general' ? generalFaqs : corporateFaqs;
  const displayedFaqs = (filteredFaqs.length > 0 ? filteredFaqs : faqs).slice(0, 8);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = faqs.filter(faq => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const lowerCaseQuestion = faq.question.toLowerCase();
      const lowerCaseAnswer = faq.answer.toLowerCase();
      if (searchOption === 'question') {
        return lowerCaseQuestion.includes(lowerCaseSearchTerm);
      } else if (searchOption === 'answer') {
        return lowerCaseAnswer.includes(lowerCaseSearchTerm);
      } else {
        return lowerCaseQuestion.includes(lowerCaseSearchTerm) || lowerCaseAnswer.includes(lowerCaseSearchTerm);
      }
    });
    setFilteredFaqs(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');  // 탭 변경 시 검색어 초기화
    setSearchOption('all'); // 탭 변경 시 검색 옵션 초기화
    setFilteredFaqs([]);  // 탭 변경 시 필터링된 FAQ 초기화
  };

  const renderSearchBox = () => (
    <div className="custom-search-box">
      <select className="search-select" onChange={handleSearchOptionChange} value={searchOption}>
        <option value="all">제목 + 내용</option>
        <option value="question">제목</option>
        <option value="answer">내용</option>
      </select>
      <input 
        type="text" 
        className="search-input" 
        placeholder="검색할 키워드를 입력해주세요." 
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}  // Enter 키 입력 처리
      />
      <button className="search-button" onClick={handleSearchClick}>
        <FaSearch size={24} />
      </button>
    </div>
  );

  const renderFaqContainer = () => (
    <div className="faq-container">
      {displayedFaqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3>Q. {faq.question}</h3>
          <p>A. {faq.answer}</p>
        </div>
      ))}
    </div>
  );

  const generalContent = (
    <div className="general-content">
      {renderSearchBox()}
      {renderFaqContainer()}
    </div>
  );

  const corporateContent = (
    <div className="corporate-content">
      {renderSearchBox()}
      {renderFaqContainer()}
    </div>
  );

  const tabs = [
    { key: 'general', label: '일반', content: generalContent },
    { key: 'corporate', label: '기업', content: corporateContent }
  ];

  const handleTabClick = (key) => {
    setActiveTab(key);
    handleTabChange(key);
  };

  return (
    <div className="page board">
      <section>
        <div className="inner">
          <div className="tab-container">
            <h3 className="tab-title">고객 센터</h3>
            <div className="tab-item">자주 묻는 질문</div>
          </div>
          <div className="qnatabs">
            <h2 className="section-title">자주 묻는 질문</h2>
            <div className="tab-buttons">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={activeTab === tab.key ? 'active' : ''}
                  onClick={() => handleTabClick(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {tabs.map((tab) => (
                activeTab === tab.key && <div key={tab.key}>{tab.content}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
