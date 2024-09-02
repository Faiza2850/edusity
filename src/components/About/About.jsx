import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play_icon.png";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Naturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education ptograms. Our cutting-edge university's
          curriculum is designed to empower students with knowledge , skills and
          experiences needed to excel in dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning experience , and
          personalized mentorship, our programs prepare aspiring educators to
          make a meaningful impact in classrooms, schools and communities.{" "}
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, conselor or
          educational leader , our diverse range of programs offer the perfect
          pathway to acheive your goals and unlock your full potential in
          shaping the future of education{" "}
        </p>
      </div>
    </div>
  );
};
