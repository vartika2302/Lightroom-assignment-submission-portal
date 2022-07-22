import styled from "styled-components";

const AssignmentContainer = styled.div`
width: 100%;
padding: 1rem;
background-color: rgb(238, 240, 249);
margin: 1rem 0;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`;

const AssignmentWrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;

`;

const AssignmentContent = styled.div`
display: flex;
flex-direction: column;
`;

const AssignmentItem = styled.div`
margin: 0.5rem 0;
`;

const AssignmentLabel = styled.span`
font-family: 'Poppins',sans-serif;
font-weight: 550;
`;

const AssignmentInfo = styled.p`
margin: 0.5rem 0;
font-family: 'Poppins',sans-serif;
font-size: 14px;
`;

const ViewSubmissionsBtn = styled.button`
padding: 7px 14px;
width: 175px;
background-color: #76ba99;
color: #fff;
border-radius: 20px;
cursor: pointer;
border: none;
font-weight: 550;
`;

function Assignment() {
  return (
    <AssignmentContainer>
      <AssignmentWrapper>
        <AssignmentContent>
          <AssignmentItem>
            <AssignmentLabel>Title</AssignmentLabel>
            <AssignmentInfo>Write about environment.</AssignmentInfo>
          </AssignmentItem>
          <AssignmentItem>
            <AssignmentLabel>Description</AssignmentLabel>
            <AssignmentInfo>
              Write at least 5 lines about environment and also write methods or
              ways to create and manage healthy environment.
            </AssignmentInfo>
          </AssignmentItem>
          <AssignmentItem>
            <AssignmentLabel>Deadline</AssignmentLabel>
            <AssignmentInfo>20 Aug 2022</AssignmentInfo>
          </AssignmentItem>
          <AssignmentItem>
            <AssignmentLabel>Assigned by - </AssignmentLabel>
            <AssignmentInfo>Monalisa Gautam</AssignmentInfo>
          </AssignmentItem>
        </AssignmentContent>
        <ViewSubmissionsBtn>View all Submissions</ViewSubmissionsBtn>
      </AssignmentWrapper>
    </AssignmentContainer>
  );
}

export default Assignment;
