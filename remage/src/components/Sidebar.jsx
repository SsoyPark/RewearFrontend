import React from "react";
import "./Sidebar.css";
import { MdOutlineClose } from "react-icons/md";
import IconButton from "./common/IconButton";
import SidebarItem from "./common/SidebarItem";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <IconButton>
        <MdOutlineClose style={{ fontSize: "32px" }} />
      </IconButton>
      <ul>
        <SidebarItem text="서비스" />
        <SidebarItem />
        <SidebarItem />
      </ul>
    </div>
  );
};

export default Sidebar;
