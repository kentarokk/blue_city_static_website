import React from "react";
import style from "./CircleButton.module.css";

const CircleButton = () => {
  return (
    <div className="text-center pt-40px">
      <span className={style.btn_loading}>
        <span>About Us</span>
      </span>
    </div>
  );
};

export default CircleButton;
