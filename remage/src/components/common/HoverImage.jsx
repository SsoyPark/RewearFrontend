import React, { useState } from 'react';
import "./HoverImage.css";

function HoverImage({imgUrl, imgAlt, hoverText}) {
    const [isVisible, setIsVisible] = useState(false);  // 이미지 표시 상태

    return (
        <span>
            {/* 텍스트에 마우스 오버/아웃 이벤트 핸들러 추가 */}
            <span 
                onMouseOver={() => setIsVisible(true)} 
                onMouseOut={() => setIsVisible(false)}
                style={{ cursor: 'pointer' }}
            >
                {hoverText}
            </span>

            {/* 이미지 표시 상태에 따라 이미지 컴포넌트를 조건부 렌더링 */}
            {isVisible && (
                <img 
                    src={imgUrl} 
                    alt={imgAlt}
                    // style={{
                    //     width: '100px', // 이미지 크기 설정
                    //     position: 'absolute', // 이미지 위치 조정
                    //     left: '100%', // 텍스트 오른쪽에 이미지 표시
                    // }}
                />
            )}
        </span>
    );
}

export default HoverImage;
