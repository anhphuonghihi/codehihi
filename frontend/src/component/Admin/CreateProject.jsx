import React, { Fragment, useEffect, useState } from "react";
import "./newProject.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProject } from "../../actions/ProjectActions";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DiscountIcon from "@material-ui/icons/LocalOffer";
import SideBar from "./Sidebar";
import { NEW_PROJECT_RESET } from "../../constans/ProjectConstans";
import { ToastContainer, toast } from 'react-toastify';

const CreateProject = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createProject);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);


  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Đồ án đã được thêm thành công");
      history.push("/dashboard");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProjectSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("category", category);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProject(myForm));
  };

  const createProjectImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="THÊM ĐỀ TÀI" />
      <div className="dashboard">
        <SideBar />
        <div className="newProjectContainer">
          <form
            className="createProjectForm"
            encType="multipart/form-data"
            onSubmit={createProjectSubmitHandler}
          >
            <h1>THÊM ĐỀ TÀI</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Project Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>



            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate._id} value={cate._id}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>


            <div id="createProjectFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProjectImagesChange}
                multiple
              />
            </div>

            <div id="createProjectFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Project Preview" />
              ))}
            </div>

            <Button
              id="createProjectBtn"
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
    </Fragment>
  );
};

export default CreateProject;