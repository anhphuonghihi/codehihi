import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCategory } from "../../actions/CategoryActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_CATEGORY_RESET } from "../../constans/CategoryConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateCategory = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createCategory);

  const [name, setName] = useState("");
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Đồ án đã được thêm thành công");
      history.push("/dashboard");
      dispatch({ type: NEW_CATEGORY_RESET });
    }
  }, [dispatch, error, history, success]);

  const createCategorySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(createCategory(myForm));
  };


  return (
    <>
      <MetaData title="THÊM ĐỀ TÀI" />
      <div className="dashboard">
        <SideBar />
        <div className="newContainer">
          <form
            className="createForm"
            onSubmit={createCategorySubmitHandler}
          >
            <h1>THÊM ĐỀ TÀI</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Category Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <Button
              id="createBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
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

export default CreateCategory;