import styled from "styled-components";
import Navbar from '../components/Navbar';

const AboutContainer = styled.div`
width: 100%;
font-family: 'Poppins',sans-serif;
`;

const AboutTop = styled.div`
background-color: #76ba99;
height: 200px;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const AboutTopHeading = styled.h1`
font-size: 3.2rem;
font-weight: 500;
`;

const AboutTopInfo = styled.p`
margin-top: 0.7rem;
letter-spacing: 0.02rem;
font-size: 1.1rem;
`;

const AboutBottom = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const AboutBottomHeading = styled.h1`
margin-top: 1rem;
color: rgba(0,0,0,0.9);
font-weight: 500;
`;

const AboutBottomInfo = styled.p`
width: 50%;
margin-top: 1rem;
`;

const AboutBottomList = styled.ul`
list-style-type: none;
`;

const AboutBottomListItem = styled.li`
font-size: 15px;
margin-top: 1rem;
color: rgba(0,0,0,0.7)
`;

const AboutBottomListItemTitle = styled.h4`
font-size: 19px;
color: rgba(0,0,0,0.8);
margin: 0.7rem 0;
font-weight: 500;
`;


function About() {
  return (
    <>
      <Navbar />
      <AboutContainer>
      
          <AboutTop>
            <AboutTopHeading>Our mission</AboutTopHeading>
            <AboutTopInfo>
              Nurture each child’s passion, curiosity, optimism, and educational
              success.
            </AboutTopInfo>
          </AboutTop>
          <AboutBottom>
            <AboutBottomHeading>Our philosophy</AboutBottomHeading>
            <AboutBottomInfo>
              <AboutBottomList>
                <AboutBottomListItem>
                  <AboutBottomListItemTitle>
                    Empowered educators
                  </AboutBottomListItemTitle>
                  From school teachers and tutors to home schoolers and parents,
                  engaged adults are the key to unlocking each child's potential
                  and drive to learn. We empower all kinds of educators to teach
                  kids by providing the best educational resources in any form
                  or device to be used at home, at school, and everywhere
                  in-between.
                </AboutBottomListItem>
                <AboutBottomListItem>
                  <AboutBottomListItemTitle>
                    Conscientious and supportive
                  </AboutBottomListItemTitle>
                  We continue to provide academically sound content of the
                  highest caliber and welcome input from our users as we address
                  issues of equity, diversity, inclusivity and representation.
                  Since we know there are many different approaches to teaching
                  and education, we develop our materials to complement these
                  different philosophies across subjects and grades.
                </AboutBottomListItem>
              </AboutBottomList>
            </AboutBottomInfo>
          </AboutBottom>
       
      </AboutContainer>
    </>
  );
}

export default About;
