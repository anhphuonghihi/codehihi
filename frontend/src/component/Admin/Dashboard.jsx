import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProject } from "../../actions/ProjectActions.js";

import { getCategory } from "../../actions/CategoryActions";

import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {

  const dispatch = useDispatch();

  const { projects, loading } = useSelector((state) => state.projects);

  const { users } = useSelector((state) => state.allUsers);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAdminProject());
    dispatch(getAllUsers());
    dispatch(getCategory());
  }, [dispatch]);



  const lineState = {
    labels: ["Số tải xuống ban đầu", "Tổng tải xuống"],
    datasets: [
      {
        label: "Lượt tải",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, 33],
      },
    ],
  };

  const doughnutState = {
    labels: ["Đã xong", "Đang làm"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [3, 4],
      },
    ],
  };

  return (
    <>
      {loading ?
        <Loading />
        : (
          <div className="dashboard">
            <MetaData title="Bảng điều khiển" />
            <Sidebar />

            <div className="dashboardContainer">
              <Typography component="h1">Bảng điều khiển</Typography>

              <div className="dashboardSummary">
                <div className="dashboardSummaryBox2">
                  <Link to="/admin/projects">
                    <p>Đồ án</p>
                    <p>{projects && projects.length}</p>
                  </Link>

                  <Link to="/admin/users">
                    <p>Người dùng</p>
                    <p>{users && users.length}</p>
                  </Link>
                </div>
              </div>

              <div className="lineChart">
                <Line data={lineState} />
              </div>

              <div className="doughnutChart">
                <Doughnut data={doughnutState} />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};
export default Dashboard
