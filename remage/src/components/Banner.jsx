import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-item left">
          <div className="banner-content">
            <div className="banner-images">
              <img src="/banner1-1.png" alt="Banner 1-1" className="banner-image" />
              <img src="/banner1-2.png" alt="Banner 1-2" className="banner-image" />
            </div>
            <div className="banner-text">
              <h3>Upcycle Clothes</h3>
              <p className="banner-text content">생성형AI로 원하는 리폼 디자인을 추천받으세요</p>
            </div>
          </div>
        </div>
        <div className="banner-item right">
          <div className="banner-content">
            <div className="banner-text">
              <h3>Virtual Fitting</h3>
              <p className="banner-text content">선택한 리폼 디자인으로 가상피팅 해보세요</p>
            </div>
            <img src="/human3.png" alt="Banner 2" className="banner-image resize" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
