import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

const HeaderWrapper = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
`;

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeaderRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

const HeaderHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const HeaderHead = styled.span`
  font-weight: bold;
  color: #76ba99;
  letter-spacing: 0.2rem;
`;

const HeaderInfo = styled.p``;

const HeaderBtn = styled.button`
  width: 8rem;
  background-color: #76ba99;
  color: #fff;
  padding: 0.8rem 0;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  font-size: 16px;
`;


const HeaderImageWrapper = styled.div`
 background-color: #76ba99;
 width: 65%;
 border-radius: 30% 70% 24% 76% / 53% 21% 79% 47% ;
 height: 500px;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const HeaderImage = styled.img`
width: 64%;
object-fit: cover;

`;


function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderHeading>
            <HeaderHead>Online </HeaderHead>
            Education
          </HeaderHeading>
          <HeaderInfo>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </HeaderInfo>
          <HeaderBtn>Learn more</HeaderBtn>
        </HeaderLeft>
        <HeaderRight>
          <HeaderImageWrapper>
            <HeaderImage src="https://1qpsh91rqagc4choym1mpta1-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/onestop-copy.png" />
          </HeaderImageWrapper>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
