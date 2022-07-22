import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RoleLogin from "../components/RoleLogin";
import { Context } from "../context/Context";

const HomeContainer = styled.div`
  background-color: #f9f9f9;
`;

function Home() {

  return (
    <HomeContainer>
      <Navbar />
      <Header />
      <RoleLogin />
    </HomeContainer>
  );
}

export default Home;
