import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, color, ...otherProps }) => {
  return (
    <button
      className="custom-button"
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
