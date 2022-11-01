import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./projectReviews.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllReviews,
  deleteReviews,
} from "../../actions/ProjectActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DeleteIcon from "@material-ui/icons/Delete";
import Star from "@material-ui/icons/Star";
import SideBar from "./Sidebar";
import { DELETE_REVIEW_RESET } from "../../constans/ProjectConstans";
import { ToastContainer, toast } from 'react-toastify';

const AllReviews = ({ history }) => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteReview
  );

  const { error, reviews, loading } = useSelector(
    (state) => state.projectReviews
  );

  const [projectId, setProjectId] = useState("");

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReviews(reviewId, projectId));
  };

  const projectReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews(projectId));
  };

  useEffect(() => {
    if (projectId.length === 24) {
      dispatch(getAllReviews(projectId));
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Đánh giá đã Xóa thành công");
      history.push("/admin/reviews");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, alert, error, deleteError, history, isDeleted, projectId]);

  const columns = [
    { field: "id", headerName: "Review ID", minWidth: 200, flex: 0.5 },

    {
      field: "user",
      headerName: "Họ tên",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "comment",
      headerName: "Bình luận",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Hạng",
      type: "number",
      minWidth: 180,
      flex: 0.4,

      cellClassName: (params) => {
        return params.getValue(params.id, "rating") >= 3
          ? "greenColor"
          : "redColor";
      },
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
            <Button
              onClick={() =>
                deleteReviewHandler(params.getValue(params.id, "id"))
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

  reviews &&
    reviews.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
      });
    });

  return (
    <>
      <MetaData title={`TẤT CẢ ĐÁNH GIÁ - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="projectReviewsContainer">
          <form
            className="projectReviewsForm"
            onSubmit={projectReviewsSubmitHandler}
          >
            <h1 className="projectReviewsFormHeading">TẤT CẢ ĐÁNH GIÁ</h1>

            <div>
              <Star />
              <input
                type="text"
                placeholder="ID Đồ án"
                required
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
              />
            </div>

            <Button
              id="createBtn"
              type="submit"
              disabled={
                loading ? true : false || projectId === "" ? true : false
              }
            >
              Tìm kiếm
            </Button>
          </form>

          {reviews && reviews.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="projectListTable"
              autoHeight
            />
          ) : (
            <h1 className="projectReviewsFormHeading">Không tìm thấy đánh giá</h1>
          )}
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
  );
};

export default AllReviews;