import React from "react";
import TextButton from "./TextButton";

const SidebarItem = ({ text, onClick, className, id }) => {
  return (
    <TextButton
      text={text}
      onClick={onClick}
      className={`sidebar-item ${className}`}
      id={id}
    />
  );
};

export default SidebarItem;
