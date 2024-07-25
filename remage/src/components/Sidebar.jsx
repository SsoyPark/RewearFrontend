import React from "react";
import "./Sidebar.css";

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
