import React, { useState } from 'react';
import './Board.css';
import { FaSearch } from 'react-icons/fa';

const Board = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  const options = ["주문 문의", "배송 문의", "기타 문의"];

  // 일반 사용자와 기업 사용자의 FAQ 데이터를 분리
  const generalFaqs = [
    { question: "선호도 입력은 왜 입력하나요?", 
      answer: "해당 선호도를 기반으로 리폼한 이미지가 생성됩니다. 입력하지 않을 경우, 리폼이미지가 제대로 생성되지 않을 수 있으니 주의하시기 바랍니다.", 
      tag: "주문 문의" },
    { question: "업로드에 사용 가능한 이미지 형식에는 어떤 것이 있나요?", 
      answer: "jpg, png 형식의 이미지를 업로드 하실 수 있습니다.", 
      tag: "주문 문의" },
    { question: "받은 제품이 예상한것과 달라요. 다시 리폼해주세요", 
      answer: "단순변심으로 재 리폼할 경우, 무료 리폼이 어렵습니다. 이 경우 새 이미지로 재주문해주시기 바랍니다. 제조사 과실일 경우, 해당 업체에 문의바랍니다.", 
      tag: "주문 문의" },
    { question: "이미지가 더 이상 생성되지 않아요.", 
      answer: "리폼 이미지는 하루에 최대 5건까지 생성할 수 있습니다. 추가로 이미지를 생성하고 싶을 경우 비용이 청구됩니다.",
      tag: "기타 문의" },
    { question: "입금을 많이 했어요.", 
      answer: "무통장입금하시는 경우 백원단위이하의 금액이 입금이 안되기때문에 주문한금액보다 더 입금하시는 경우가 있는데요, 추가 입금된 잔돈은 예치금으로 적립해드립니다. 또한 예치금은 요청시 계좌환불 가능합니다.", 
      tag: "주문 문의" },
    { question: "오늘 제품 출발하면 내일 받나요?", 
      answer: "수령일은 택배사의 사정에 따라 달라질 수 있습니다. 평균 배송일은 주문일로부터 1~2일입니다.", 
      tag: "배송 문의" },
    { question: "해외배송도 되나요?", 
      answer: "해외 배송은 우체국 EMS로 발송이 되며 배송기간은 3~15일 내외로 소요됩니다. 또한, 해외 배송비는 나라 및 제품 무게에 따라 배송비에 차이가 있습니다.", 
      tag: "배송 문의" },
    { question: "이야 너무 어렵다 살려줘요", 
      answer: "하드코딩 한거니까 나중에 수정이 필요해요.", 
      tag: "기타 문의" },
  ];

  const corporateFaqs = [
    { question: "기업 사용 FAQ 1", 
      answer: "주문에 대한 답변입니다.", 
      tag: "주문 문의" },
    { question: "기업 사용 FAQ 2", 
      answer: "배송에 대한 답변입니다.", 
      tag: "배송 문의" },
    { question: "기업 사용 FAQ 3", 
      answer: "기타에 대한 답변입니다.", 
      tag: "기타 문의" },
    { question: "기업 사용 FAQ 4", 
      answer: "기업 사용 FAQ 4에 대한 답변입니다.", 
      tag: "기타 문의" },
    { question: "기업 사용 FAQ 5", 
      answer: "주문에 대한 답변입니다.", 
      tag: "주문 문의" },
    { question: "기업 사용 FAQ 6", 
      answer: "기업 사용 FAQ 6에 대한 답변입니다.", 
      tag: "기타 문의" },
    { question: "기업 사용 FAQ 7", 
      answer: "배송에 대한 답변입니다.", 
      tag: "배송 문의" },
    { question: "기업 사용 FAQ 8", 
      answer: "기업 사용 FAQ 8에 대한 답변입니다.",
       tag: "기타 문의" },
  ];

  // 현재 활성화된 탭에 따라 FAQ 데이터를 설정
  const faqs = activeTab === 'general' ? generalFaqs : corporateFaqs;
  const displayedFaqs = (filteredFaqs.length > 0 ? filteredFaqs : faqs).slice(0, 8);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = faqs.filter(faq =>
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTag === '' || faq.tag === selectedTag)
    );
    setFilteredFaqs(filtered);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    const filtered = faqs.filter(faq =>
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (e.target.value === '' || faq.tag === e.target.value)
    );
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
    setSelectedTag(''); // 탭 변경 시 태그 초기화
    setFilteredFaqs([]);  // 탭 변경 시 필터링된 FAQ 초기화
  };

  const renderSearchBox = () => (
    <div className="custom-search-box">
      <select className="search-select" onChange={handleTagChange} value={selectedTag}>
        <option value=''>문의 유형</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
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
    <div className="board">
      <section>
        <div className="inner">
          <div className="tab-container">
            <h3 className ="tab-title">고객 센터</h3>
            <div className ="tab-item">자주 묻는 질문</div>
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
