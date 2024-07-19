import React, { useEffect, useRef } from "react";
import "./Sidebar.css";
import { MdOutlineClose } from "react-icons/md";
import IconButton from "./common/IconButton";
import SidebarItem from "./SidebarItem";
import TextButton from "./common/TextButton";

const Sidebar = ({ isOpen, shutDownSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* <div id="sidebar-escape">
        <IconButton onClick={shutDownSidebar}>
          <MdOutlineClose style={{ fontSize: "28px" }} />
        </IconButton>
      </div> */}
    </div>
  );
};

export default Sidebar;
