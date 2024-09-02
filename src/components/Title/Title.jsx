import React from "react";
import "./Title.css";

export const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p> {title}</p>
      <h2>{subTitle}</h2>
    </div>
  );
};
