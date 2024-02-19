import React from "react";
import "./style.css";

const Button = ({ btnName, onClick }) => {
  // const handleClick = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {btnName}
        </button>
      </div>
    </>
  );
};

export default Button;
