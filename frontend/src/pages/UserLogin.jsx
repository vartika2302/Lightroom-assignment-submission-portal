import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const UserLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const UserLoginLeft = styled.div`
  flex: 1;
`;

const UserLoginLeftWrapper = styled.div`
  background-color: #f1cdd7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const UserLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const UserLoginImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`;

const UserLoginRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterPara = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
`;

const UserLoginRightWrapper = styled.div`
  width: 40%;
  height: 40vh;
`;

const UserLoginHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const UserLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const UserLoginItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  height: 30px;
  margin-top: 0.5rem;
  outline-color: #76ba99;
`;

const UserLoginBtn = styled.button`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #76ba99;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

function UserLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      );
      res.data && dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <UserLoginContainer>
      <UserLoginLeft>
        <UserLoginLeftWrapper>
          <UserLogo>
            light<span>room</span>
          </UserLogo>
          <UserLoginImage src="https://cdn.dribbble.com/users/3289568/screenshots/6446572/attachments/1379380/250fa021-25fa-405c-9608-9912ff1982fe.png" />
        </UserLoginLeftWrapper>
      </UserLoginLeft>
      <UserLoginRight>
        <RegisterPara>
          Not a member ? <Link to="/register">Sign up now</Link>
        </RegisterPara>
        <UserLoginRightWrapper>
          <UserLoginHeading>Sign in to Lightroom</UserLoginHeading>
          <UserLoginForm onSubmit={handleSubmit}>
            <UserLoginItem>
              <Label>Email</Label>
              <Input type="text" required ref={emailRef} />
            </UserLoginItem>
            <UserLoginItem>
              <Label>Password</Label>
              <Input type="password" required ref={passwordRef} />
            </UserLoginItem>
            <UserLoginBtn type="submit" disabled={isFetching}>
              Sign in
            </UserLoginBtn>
          </UserLoginForm>
        </UserLoginRightWrapper>
      </UserLoginRight>
    </UserLoginContainer>
  );
}

export default UserLogin;
