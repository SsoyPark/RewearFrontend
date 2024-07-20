import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-item left">
        <div className="banner-content">
          <img src="/KakaoTalk_20240719_150420764.png" alt="Banner 1" className="banner-image" />
          <div className="banner-text">
            <h2>Banner 1 Title</h2>
            <p>This is a description for Banner 1.</p>
          </div>
        </div>
      </div>
      <div className="banner-item right">
        <div className="banner-content">
          <div className="banner-text">
            <h2>Banner 2 Title</h2>
            <p>This is a description for Banner 2.</p>
          </div>
          <img src="/KakaoTalk_20240719_150420764.png" alt="Banner 2" className="banner-image" />
        </div>
      </div>
      <div className="banner-item left">
        <div className="banner-content">
          <img src="/KakaoTalk_20240719_150420764.png" alt="Banner 3" className="banner-image" />
          <div className="banner-text">
            <h2>Banner 3 Title</h2>
            <p>This is a description for Banner 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
