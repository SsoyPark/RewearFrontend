import React from "react";
import TextButton from "./TextButton";

const SidebarItem = ({ text, onClick, className, id }) => {
  return (
    <li>
      <TextButton text={text} onClick={onClick} className={className} id={id} />
    </li>
  );
};

export default SidebarItem;
