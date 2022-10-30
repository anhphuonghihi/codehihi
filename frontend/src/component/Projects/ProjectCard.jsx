import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
const ProjectCard = ({ project }) => {
  const options = {
    value: project.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <Link className="ProjectCard" to={`/project/${project._id}`}>
        <img
          src={project.images[0].url}
          alt={project.name}
          className="ProjectImg"
        />
        <p className="projectName">{project.name}</p>
        <div>
          <Rating {...options} />
          <span>({project.numOfReviews} Reviews)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="offerPriceBox">
            <h1
              className="discountPrice"
              style={{
                paddingLeft: "2.5vmax",
                fontSize: ".9vmax",
                paddingBottom: "0",
              }}
            >
              {project.offerPrice > 0 ? `$${project.offerPrice}` : ""}
            </h1>
            <span className="p__Price">{`$${project.price}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
