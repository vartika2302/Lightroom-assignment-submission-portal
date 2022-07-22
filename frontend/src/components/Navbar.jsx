import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const NavbarContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 5rem;
`;

const NavbarLeft = styled.div`
  flex: 1;
`;

const NavbarHeading = styled.h1`
  font-family: "Sacramento", cursive;
  font-size: 2.2rem;
  cursor: pointer;
`;

const NavbarRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavbarItem = styled.span`
  margin-right: 1.7rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const NavbarBtn = styled.button`
  background-color: #76ba99;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 0.8rem;
  cursor: pointer;
`;

function Navbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLeft>
          <NavbarHeading>
            <Link to="/" className="link">lightroom</Link>
          </NavbarHeading>
        </NavbarLeft>
        <NavbarRight>
          <NavbarItem>
            <Link to="/" className="link">
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/about" className="link">
              About Us
            </Link>
          </NavbarItem>

          <NavbarItem><Link to="/dashboard" className="link">Dashboard</Link></NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
          {user ? (
            <NavbarBtn onClick={handleLogout}>LOG OUT</NavbarBtn>
          ) : (
            <Link to="/student/login">
              <NavbarBtn>LOG IN</NavbarBtn>
            </Link>
          )}
        </NavbarRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
