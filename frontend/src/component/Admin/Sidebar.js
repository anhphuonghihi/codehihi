import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import Logo from "../../Assets/logo.png"
import CategoryIcon from '@material-ui/icons/Category';
const Sidebar = () => {

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={Logo}
          style={{ cursor: "pointer" }}
          alt="Lỗi"
        />
      </Link>

      <Link to="/dashboard">
        <p className="Dashboard__item">
          <DashboardIcon /> Bảng điều khiển
        </p>
      </Link>
      <Link to="/admin/projects">
        <p className="Dashboard__item"><PostAddIcon /> Tất cả đồ án</p>
      </Link>

      <Link to="/admin/project">
        <p><AddIcon />Thêm đồ án</p>
      </Link>
      <Link to="/admin/categories">
        <p className="Dashboard__item"><CategoryIcon /> Tất cả danh mục </p>
      </Link>

      <Link to="/admin/category">
        <p><AddIcon />Thêm danh mục </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Người dùng
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;