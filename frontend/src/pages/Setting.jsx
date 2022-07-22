import { useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";
import axios from "axios";

const SettingContainer = styled.div`
  display: flex;
  height: calc(100vh - 6.2rem);
  font-family: "Poppins", sans-serif;
`;

const SettingLeft = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SettingLeftWrapper = styled.div``;

const SettingHeading = styled.h2``;

const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid gray;
  border-radius: 50%;
`;

const ProfilePicUpdate = styled.div`
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2rem;
`;

const ProfilePicChange = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: #76ba99;
  color: #fff;
  border: none;
  font-weight: 400;
  letter-spacing: 0.02rem;
  border-radius: 3px;
  cursor: pointer;
`;

const ProfilePicChangeInput = styled.input`
  display: none;
`;

const ProfilePicDelete = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  border: none;
  background-color: #fff;
  border: 2px solid grey;
  font-weight: 400;
  letter-spacing: 0.02rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
`;

const SettingForm = styled.form`
  margin-top: 1.5rem;
`;

const SettingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const SettingInfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingInfoHeading = styled.label`
  font-size: 15px;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const SettingInput = styled.input`
  height: 25px;
  margin-top: 0.5rem;
  outline-color: #76ba99;
`;

const SettingSelect = styled.select`
  margin-top: 0.5rem;
  height: 25px;
  outline-color: #76ba99;
`;

const SettingOption = styled.option``;

const UpdateButton = styled.button`
  padding: 7px 15px;
  margin-top: 1rem;
  background-color: #76ba99;
  color: #fff;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.02rem;
`;

const SettingRight = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;

const SettingRightWrapper = styled.img`
  width: 400px;
  height: auto;
`;

function Setting() {
  const { user, dispatch } = useContext(Context);
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState(user.position);
  const [file, setFile] = useState(null);
  const [remove, setRemove] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setFile(null);
    setRemove(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      firstName: firstname,
      lastName: lastname,
      email,
      password,
      position,
    };
    if (file) {
      setRemove(false);
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.image = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    } else {
      updatedUser.image = "";
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/update/" + user._id,
        updatedUser
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const PF = "http://localhost:5000/images/";

  return (
    <>
      <Navbar />
      <SettingContainer>
        <SettingLeft>
          <SettingLeftWrapper>
            <SettingHeading>Profile Info</SettingHeading>
            <SettingForm onSubmit={handleSubmit}>
              <ProfilePicContainer>
                <ProfilePic
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : user.image === "" || remove
                      ? "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                      : PF + user.image
                  }
                  alt="profile picture"
                />
                <ProfilePicUpdate>
                  <ProfilePicChange htmlFor="settingFile">
                    Select
                  </ProfilePicChange>
                  <ProfilePicChangeInput
                    type="file"
                    id="settingFile"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <ProfilePicDelete onClick={handleClick}>
                    Remove
                  </ProfilePicDelete>
                </ProfilePicUpdate>
              </ProfilePicContainer>
              <SettingInfoContainer>
                <SettingInfoItem>
                  <SettingInfoHeading>First name</SettingInfoHeading>
                  <SettingInput
                    type="text"
                    required
                    value={user.firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </SettingInfoItem>
                <SettingInfoItem>
                  <SettingInfoHeading>Last name</SettingInfoHeading>
                  <SettingInput
                    type="text"
                    required
                    value={user.lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </SettingInfoItem>

                <SettingInfoItem>
                  <SettingInfoHeading>Email</SettingInfoHeading>
                  <SettingInput
                    type="email"
                    required
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </SettingInfoItem>
                <SettingInfoItem>
                  <SettingInfoHeading for="position">
                    Position
                  </SettingInfoHeading>
                  <SettingSelect
                    name="position"
                    id="position"
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <SettingOption disabled>Position</SettingOption>
                    <SettingOption
                      value="student"
                      selected={user.position === "student"}
                    >
                      Student
                    </SettingOption>
                    <SettingOption
                      value="teacher"
                      selected={user.position === "teacher"}
                    >
                      Teacher
                    </SettingOption>
                  </SettingSelect>
                </SettingInfoItem>
                <SettingInfoItem>
                  <SettingInfoHeading>Password</SettingInfoHeading>
                  <SettingInput
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </SettingInfoItem>
              </SettingInfoContainer>
              <UpdateButton type="submit">Update</UpdateButton>
            </SettingForm>
          </SettingLeftWrapper>
        </SettingLeft>
        <SettingRight>
          <SettingRightWrapper src="https://cdn.dribbble.com/users/1450874/screenshots/15555516/media/e70b73671f40c3102ab98f4c251c198e.jpg?compress=1&resize=1000x750&vertical=top" />
        </SettingRight>
      </SettingContainer>
    </>
  );
}

export default Setting;
// "https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9wcmluY2lwbGVoci9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d"
