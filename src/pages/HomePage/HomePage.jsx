import React from "react";
import Directory from "../../components/Directory/Directory";
import { FiShoppingCart } from "react-icons/fi";
import { HomepageContainer } from "./Homepage.styles";
export const HomePage = () => (
  <HomepageContainer>
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
  </HomepageContainer>
);
