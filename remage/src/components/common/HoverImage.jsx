import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './HoverImage.module.css';

const HoverImage = ({
  imgUrl,
  imgAlt,
  hoverText,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log('Is Visible', isVisible);
  const classArray = className ? className.split(" ") : [];

  const componentClass = classNames(
    styles["component"],
    ...classArray.map(cls => styles[cls])
  );

  return (
    <div className={componentClass}>
      <span 
        onMouseOver={() => setIsVisible(true)} 
        onMouseOut={() => setIsVisible(false)}
      >
        {hoverText}
      </span>

      {isVisible && (
        <img 
          src={imgUrl}
          alt={imgAlt}
          className={styles.imageStyle}
        />
      )}
    </div>
  );
};

export default HoverImage;
