import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const UserRegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const UserRegisterLeft = styled.div`
  flex: 1;
`;

const UserRegisterLeftWrapper = styled.div`
  background-color: #f2d184;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const UserLogo = styled.h1`
  align-self: flex-start;
  margin-left: 4rem;
  font-family: "Sacramento", cursive;
  color: #86566c;
  font-size: 2.2rem;
`;

const UserRegisterImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
`;

const UserRegisterRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPara = styled.p`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
`;

const UserRegisterRightWrapper = styled.div`
  width: 40%;
  height: 60vh;
`;

const UserRegisterHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const UserRegisterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const UserRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  height: 30px;
  margin-top: 0.5rem;
  outline-color: #76ba99;
`;

const Select = styled.select`
  margin-top: 0.5rem;
  height: 30px;
  outline-color: #76ba99;
`;

const Option = styled.option``;

const UserRegisterBtn = styled.button`
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

const Error = styled.p`
  color: red;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;

function UserRegister() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
          position,
        }
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <UserRegisterContainer>
      <UserRegisterLeft>
        <UserRegisterLeftWrapper>
          <UserLogo>
            light<span>room</span>
          </UserLogo>
          <UserRegisterImage src="https://cdn.dribbble.com/users/76454/screenshots/6596459/drbbb_4x.png?compress=1&resize=1000x750&vertical=top" />
        </UserRegisterLeftWrapper>
      </UserRegisterLeft>
      <UserRegisterRight>
        <LoginPara>
          Already a member ? <Link to="/login">Sign in now</Link>
        </LoginPara>
        <UserRegisterRightWrapper>
          <UserRegisterHeading>Sign up to Lightroom</UserRegisterHeading>
          <Error>{error && "Something went wrong 😕"}</Error>
          <UserRegisterForm onSubmit={handleSubmit}>
            <UserRegisterItem>
              <Label>First name</Label>
              <Input
                type="text"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </UserRegisterItem>
            <UserRegisterItem>
              <Label>Last name</Label>
              <Input
                type="text"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </UserRegisterItem>
            <UserRegisterItem>
              <Label>Email</Label>
              <Input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </UserRegisterItem>
            <UserRegisterItem>
              <Label for="position">Position</Label>
              <Select
                id="position"
                name="position"
                onChange={(e) => setPosition(e.target.value)}
              >
                <Option selected disabled>
                  Position
                </Option>
                <Option value="student">Student</Option>
                <Option value="teacher">Teacher</Option>
              </Select>
            </UserRegisterItem>
            <UserRegisterItem>
              <Label>Password</Label>
              <Input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </UserRegisterItem>
            <UserRegisterItem>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </UserRegisterItem>
            <UserRegisterBtn type="submit">Sign up</UserRegisterBtn>
          </UserRegisterForm>
        </UserRegisterRightWrapper>
      </UserRegisterRight>
    </UserRegisterContainer>
  );
}

export default UserRegister;
