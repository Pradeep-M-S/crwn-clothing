import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, color, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      style={{
        backgroundColor: `${color}`,
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
