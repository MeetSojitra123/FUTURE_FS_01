import React from 'react';
import styled from 'styled-components';
import weatherAppImg from '../assets/weather.jpg'; 
import epicImg from '../assets/epic.jpg';
import fitboostImg from '../assets/fitboost.jpg';
const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 0 4rem 0 4rem;
  background-color: #0A192F;
  color: #CCD6F6;
  @media (max-width: 900px) {
    padding: 0 1.5rem 0 1.5rem;
  }
`;

const Header = styled.h2`
  font-size: 2.5rem;
  color: #64FFDA;
  margin-bottom: 20px;
  margin-top: 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: #64FFDA;
    border-radius: 2px;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ProjectCard = styled.div`
  background: #112240;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid #233554;

  &:hover {
    transform: translateY(-5px);
    border-color: #64FFDA;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #233554;
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    height: 120px;
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const ProjectTitle = styled.h3`
  color: #64FFDA;
  margin-bottom: 15px;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const ProjectDescription = styled.p`
  color: #8892B0;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLinkBtn = styled.a`
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 20px;
  background: linear-gradient(90deg, #64FFDA 0%, #1DE9B6 100%);
  color: #0A192F;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(100,255,218,0.15);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: linear-gradient(90deg, #1DE9B6 0%, #64FFDA 100%);
    box-shadow: 0 4px 16px rgba(100,255,218,0.25);
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Header>Featured Projects</Header>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage>
            <img src={weatherAppImg} alt="Weather App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ProjectImage>
          <ProjectInfo>
            <ProjectTitle>Weather App</ProjectTitle>
            <ProjectDescription>
              A weather dashboard with live data and 5-day forecast. Built with React.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLinkBtn href="https://github.com/MeetSojitra123/FUTURE_FS_02" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                Github
              </ProjectLinkBtn>
              <ProjectLinkBtn href="https://weather-shower1.netlify.app/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5z"/></svg>
                Live Demo
              </ProjectLinkBtn>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={epicImg} alt="Weather App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ProjectImage>
          <ProjectInfo>
            <ProjectTitle>EpicGame Clone</ProjectTitle>
            <ProjectDescription>
              An EpicGame clone with a modern UI. Built with css,html and javascript.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLinkBtn href="https://github.com/MeetSojitra123/game-website" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                Github
              </ProjectLinkBtn>
              <ProjectLinkBtn href="https://epicgameswebclone.netlify.app/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5z"/></svg>
                Live Demo
              </ProjectLinkBtn>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={fitboostImg} alt="Weather App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ProjectImage>
          <ProjectInfo>
            <ProjectTitle>FitBoost</ProjectTitle>
            <ProjectDescription>
              A fitness app with a modern UI and smooth animations. Built with MERN stack.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLinkBtn href="https://github.com/vaibhavsurani/FitBoost" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                Github
              </ProjectLinkBtn>
              <ProjectLinkBtn href="https://fitboostgo.netlify.app/" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5z"/></svg>
                Live Demo
              </ProjectLinkBtn>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;