/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mon.jpg";

const imageAltText = "This is Montain image. This is backgroud photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tips prediction Machine Leraing Model 🎉",
    description:
      "This project organizes various tips and contents of matplotlib which we browse every day.",
    url: "https://www.kaggle.com/code/subinium/simple-matplotlib-visualization-tips ",
  },
  {
    title: "Heart Disease Prediction Machine Learning Model 🎉",
    description:
      "This project predicts the heart disease using machine learning model.",
    url: "https://www.kaggle.com/code/danishmubashar/heart-disease-prediction-by-danish ",
  },
  {
    title: "Diamond Price Prediction Machine Learning Model 🎉",
    description:
      "This project predicts the diamond price using machine learning model.",
    url: "https://www.kaggle.com/code/karnikakapoor/diamond-price-prediction ",
  },
  {
    title: "Banking Management System 🎉 in C++",
    description:
      "Baniking Management System is a simple console based application that is very easy to understand and use.",
    url: "https://github.com/umairinayat/Banking-management-system ",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
