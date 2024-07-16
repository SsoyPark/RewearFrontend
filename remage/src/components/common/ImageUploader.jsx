import React, { useState } from "react";
import classNames from "classnames";
import styles from "./ImageUploader.module.css";

const ImageUploader = ({ className, onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        if (onImageUpload) {
          onImageUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const classArray = className ? className.split(" ") : [];
  const componentClass = classNames(
    styles["component"],
    ...classArray.map((cls) => styles[cls]),
    className
  );

  return (
    <div className={componentClass}>
      <div className={styles.preview}>
        {image ? <img src={image} alt="미리보기" /> : <div className="{styles.emptyPreview}"></div>}
      </div>
      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        className={styles.input}
        onChange={handleImageChange}
      />
      <label htmlFor="imageUpload" className={styles.label}>이미지 올리기</label>
    </div>
  );
};

export default ImageUploader;
