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
import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {

  const dispatch = useDispatch();

  const { projects, loading } = useSelector((state) => state.projects);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  projects &&
    projects.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProject());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;


  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, projects.length - outOfStock],
      },
    ],
  };

  return (
    <>
      {loading ?
        <Loading />
        : (
          <div className="dashboard">
            <MetaData title="Dashboard" />
            <Sidebar />

            <div className="dashboardContainer">
              <Typography component="h1">Dashboard</Typography>

              <div className="dashboardSummary">
                <div>
                  <p>
                    Total Amount <br /> ${totalAmount}
                  </p>
                </div>
                <div className="dashboardSummaryBox2">
                  <Link to="/admin/projects">
                    <p>Project</p>
                    <p>{projects && projects.length}</p>
                  </Link>

                  <Link to="/admin/users">
                    <p>Users</p>
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
