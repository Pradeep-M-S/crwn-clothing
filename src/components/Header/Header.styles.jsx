import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
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
  font-size:clamp(.8rem , 5vw , 1rem);
  @media screen and (max-width:768px) {
    width:35%;
    padding:0 15px;
  }
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

  @media screen and (max-width:650px) {
    display:none;  
  }
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
  @media screen and (max-width:650px) {
    justify-content:center;
  }
`;


export const HamburgerContainer = styled.div`
  align-self:center;
  padding-right:15px;
  @media screen and (min-width:650px) {
    display:none;
  }
`

export const MenuContainer = styled.div`
  width:100%;
  height:25%;
  position:absolute;
  top:75px;
  background-color:#f7f7f7;
  left:0;
  z-index:2000000;
  border-radius:5px;
  
`