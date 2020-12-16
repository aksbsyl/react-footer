import styled from "styled-components";
import img from "./neutrolinelogo.png";

export const Header = styled.div`
  border: 1px solid white;
  background-image: url(${img});
  width: 100px;
  height: 100px;
  margin-block-start: 1em; 
  margin-left: 0sem;
  &:hover {
    border: 0.5px solid #87ceeb;
`;
