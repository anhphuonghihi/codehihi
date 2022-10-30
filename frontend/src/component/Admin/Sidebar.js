import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import Logo from "../../Assets/logo.png"
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
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/projects">
        <p className="Dashboard__item"><PostAddIcon /> All Projects</p>
      </Link>

      <Link to="/admin/project">
        <p><AddIcon />Create Project</p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;