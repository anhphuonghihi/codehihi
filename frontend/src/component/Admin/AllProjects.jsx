import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProjects.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProject,
  getAdminProject,
} from "../../actions/ProjectActions";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import { DELETE_PROJECT_RESET } from "../../constans/ProjectConstans";


const AllProjects = ({ history }) => {

  const dispatch = useDispatch();

  const { error, projects } = useSelector((state) => state.projects);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProject
  );

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Đồ án đã được xóa thành công");
      history.push("/dashboard");
      dispatch({ type: DELETE_PROJECT_RESET });
    }
    dispatch(getAdminProject());
  }, [dispatch, error, history, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Project ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Tên",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Trạng thái",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/edit/project/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProjectHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  projects &&
    projects.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`Danh sách đồ án- Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="projectListContainer">
          <h1 id="projectListHeading">TẤT CẢ CÁC DỰ ÁN</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="projectListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default AllProjects
