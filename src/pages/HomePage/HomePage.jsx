import React from "react";
import Directory from "../../components/Directory/Directory";
import { FiShoppingCart } from "react-icons/fi";
import { HomepageContainer } from "./Homepage.styles";
export const HomePage = () => (
  <HomepageContainer>
    {" "}
    <h2
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "0",
      }}
    >
      <FiShoppingCart style={{ padding: "15px" }} />
      SHOP NOW
    </h2>
    <Directory />
  </HomepageContainer>
);
