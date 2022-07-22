import { useContext } from "react";
import styled from "styled-components";
import AddAssignment from "../components/AddAssignment";
import Assignment from "../components/Assignment";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";

const TeacherDashboardContainer = styled.div`
  width: 100%;
`;

const TeacherDashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AssignmentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 90%;
`;

function TeacherDashboard() {

  const user = useContext(Context);

  return (
    <>
      <Navbar />
      <TeacherDashboardContainer>
        <TeacherDashboardWrapper>
          <AddAssignment />
          <AssignmentList>
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
            <Assignment />
          </AssignmentList>
        </TeacherDashboardWrapper>
      </TeacherDashboardContainer>
    </>
  );
}

export default TeacherDashboard;
