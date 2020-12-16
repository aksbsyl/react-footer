import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 80px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  // rgba(92, 39, 251, 1) 0%,
  // rgba(112, 71, 247, 1) 100%
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 6000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #000;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Nunito Sans" !important;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: "Nunito Sans" !important;
  color: #000;
  margin-bottom: 15px;
  font-weight: bold;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
