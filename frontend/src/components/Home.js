import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/profile.png.png';
import resumePDF from '../assets/Meet Sojitra_Resume.pdf';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0A192F;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 1.5rem;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

const ContentSection = styled.div`
  max-width: 600px;
  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin: 0;
  color: #64FFDA;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 2rem 0;
  line-height: 1.6;
  color: #8892B0;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2rem;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ContactButton = styled.button`
  padding: 1rem 2rem;
  background-color: #64FFDA;
  color: #0A192F;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgb(100, 255, 219);
  }
`;

const DownloadButton = styled(ContactButton)`
  background-color: transparent;
  color: #64FFDA;
  border: 1px solid #64FFDA;

  &:hover {
    background-color: rgba(100, 255, 219, 0.1);
  }
`;

const ImageSection = styled.div`
  width: 450px;
  height: 450px;
  background: rgb(100, 255, 219);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 220px;
    height: 220px;
  }
`;

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
`;

const SocialLink = styled.a`
  color: #64FFDA;
  font-size: 1.7rem;
  transition: color 0.2s;
  &:hover {
    color: #52e0c4;
  }
`;

function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <HomeContainer>
      <ContentSection>
        <Title>Hi, I'm Meet Sojitra </Title>
        <Subtitle>
          I'm a IT student with expertise in React and Node.js. 
          Reach out if you'd like to learn more!
        </Subtitle>
        <ButtonContainer>
          <DownloadWrapper>
            <DownloadButton onClick={handleDownload}>
              Download CV
            </DownloadButton>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/meetkumar-sojitra-606879284/" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/MeetSojitra123" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </DownloadWrapper>
          <ContactButton onClick={scrollToContact}>
            Contact Me
          </ContactButton>
        </ButtonContainer>
      </ContentSection>
      <ImageSection>
        <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </ImageSection>
    </HomeContainer>
  );
}

export default Home;