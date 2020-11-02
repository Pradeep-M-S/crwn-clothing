import React from "react";
import "./FormInput.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        style={{
          textAlign: "left",
          cursor: "pointer",
          backgroundColor: "#F7F7F7",
        }}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
