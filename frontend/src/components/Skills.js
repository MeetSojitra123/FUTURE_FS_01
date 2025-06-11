import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
  padding: 20px 0 0 0;
  margin-bottom: 0;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const SkillCard = styled.div`
  background: #112240;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid #233554;

  &:hover {
    transform: translateY(-5px);
    border-color: #64FFDA;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const SkillName = styled.h3`
  color: #64FFDA;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const SkillLevel = styled.p`
  color: #8892B0;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

function Skills() {
  return (
    <SkillsContainer>
      <Header>Technical Skills</Header>
      <SkillsGrid>
        <SkillCard>
          <SkillName>React.js</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>Node.js</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>JavaScript</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>HTML/CSS</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>MongoDB</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>Git</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>C</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>C++</SkillName>
          <SkillLevel>Advanced</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>Java</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
        <SkillCard>
          <SkillName>Python</SkillName>
          <SkillLevel>Intermediate</SkillLevel>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;