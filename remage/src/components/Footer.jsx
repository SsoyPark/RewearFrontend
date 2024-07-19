import React from 'react';
import '../styles/Footer.css'; // styles 폴더에서 Footer.css 불러오기

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrap">
                <p>개인정보 처리방침 이용약관</p>
                <p>㈜리웨어 경기도 성남시 분당구 불정로 90(정자동) 301호 대표자명 : 박소영</p>
                <p>© 2024 Re:WEAR. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
