import React, { useEffect } from "react";
import "./Home.css";
import ProjectCard from "../Projects/ProjectCard";
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProject } from "../../actions/ProjectActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  const { projects, error, loading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProject());
  }, [dispatch, error])

  return (
    <>
      {loading ? (
        <Loading />
      )
        : (
          <>
            <MetaData title="Trang chủ" />
            <Header />

            <h2 className="homeHeading">Đồ án nổi bật</h2>
            <div className="container" id="container">
              {projects && projects.map((product) => (
                <ProjectCard key={product._id} product={product} />
              ))}
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
            <Footer />
            <BottomTab />
          </>
        )}
    </>
  );
};

export default Home;
