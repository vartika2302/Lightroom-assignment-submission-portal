import styled from "styled-components";
import {Link} from 'react-router-dom';

const RoleLoginContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const RoleLoginWrapper = styled.div`
  width: 100%;
`;

const RoleLoginTop = styled.div`
  display: flex;
`;

const RoleLoginBottom = styled.div`
  display: flex;
`;

const RoleLoginLeft = styled.div`
  flex: 1;
`;

const RoleLoginRight = styled.div`
  flex: 1;
`;

const RoleRightWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 7rem;
`;

const RoleLoginImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 61% 39% 65% 35% / 0% 100% 0% 100%;
`;

const RoleLoginHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  width: 100%;
`;

const RoleLoginHead = styled.h3`
  color: #76ba99;
`;

const RoleLoginInfo = styled.p`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

const RoleLoginBtn = styled.button`
  background-color: #76ba99;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
`;

function RoleLogin() {
  return (
    <RoleLoginContainer>
      <RoleLoginWrapper>
        <RoleLoginTop>
          <RoleLoginLeft>
            <RoleLoginImage src="https://images.hindi.news18.com/ibnkhabar/uploads/2022/05/pgt-1.jpg" />
          </RoleLoginLeft>
          <RoleLoginRight>
            <RoleRightWrapper>
              <RoleLoginHeading>
                Are you a <RoleLoginHead>TEACHER ?</RoleLoginHead>
              </RoleLoginHeading>
              <RoleLoginInfo>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </RoleLoginInfo>
              <Link to="/teacher/login">
                <RoleLoginBtn>Login</RoleLoginBtn>
              </Link>
            </RoleRightWrapper>
          </RoleLoginRight>
        </RoleLoginTop>
        <RoleLoginBottom>
          <RoleLoginLeft>
            <RoleRightWrapper>
              <RoleLoginHeading>
                Are you a <RoleLoginHead>STUDENT ?</RoleLoginHead>
              </RoleLoginHeading>
              <RoleLoginInfo>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </RoleLoginInfo>
              <Link to="/student/login">
              <RoleLoginBtn>Login</RoleLoginBtn>
              </Link>
            </RoleRightWrapper>
          </RoleLoginLeft>
          <RoleLoginRight>
            <RoleLoginImage src="https://assets.materialup.com/uploads/a0cc7bb6-d719-44aa-9b5e-7de72d9d6187/preview.jpg" />
          </RoleLoginRight>
        </RoleLoginBottom>
      </RoleLoginWrapper>
    </RoleLoginContainer>
  );
}

export default RoleLogin;
