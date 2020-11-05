import React from "react";
import "./HomePage.scss";
import Directory from "../../components/Directory/Directory";
import { FiShoppingCart } from "react-icons/fi";
export const HomePage = () => (
  <div className="homepage">
    {" "}
    <h1
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "0 30px",
      }}
    >
      <FiShoppingCart style={{ padding: "15px" }} />
      SHOP NOW
    </h1>
    <Directory />
  </div>
);
