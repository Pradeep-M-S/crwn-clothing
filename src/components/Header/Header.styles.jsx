import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  background-color: #f7f7f7;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.6);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding-right: 20px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  .react-icons-header {
    padding-right: 5px;
  }
`;
