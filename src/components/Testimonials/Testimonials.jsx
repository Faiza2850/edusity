import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";

export const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < -50) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community,
                state-ofothe-art facilities, and commitment to the academic
                excellence have truly exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mark Zukerburg</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community,
                state-ofothe-art facilities, and commitment to the academic
                excellence have truly exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community,
                state-ofothe-art facilities, and commitment to the academic
                excellence have truly exceeded my expectations.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community,
                state-ofothe-art facilities, and commitment to the academic
                excellence have truly exceeded my expectations.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
