import styled from "styled-components";
import Navbar from "../components/Navbar";

const StudentDashboardContainer = styled.div``;

const StudentDashboardWrapper = styled.div``;

function StudentDashboard() {
  return (
    <>
      <Navbar />
      <StudentDashboardContainer>
        <StudentDashboardWrapper></StudentDashboardWrapper>
      </StudentDashboardContainer>
    </>
  );
}

export default StudentDashboard;
