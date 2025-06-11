import React from 'react';
import styled from 'styled-components';
import pythonCertificate from '../assets/Python.pdf';
import mongodbCertificate from '../assets/mongodb.pdf';
import dsaCertificate from '../assets/DSA.pdf';

const AchievementsContainer = styled.div`
  min-height: 100vh;
  padding: 80px 40px 20px;
  background-color: #0A192F;
  @media (max-width: 900px) {
    padding: 80px 10px 20px;
  }
`;

const Header = styled.h2`
  text-align: left;
  margin-left: 20px;
  padding-top: 20px;
  font-size: 2.5rem;
  color: #64FFDA;
  margin-bottom: 30px;
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
    margin-left: 0;
    margin-bottom: 16px;
    padding-top: 10px;
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 10px;
  }
`;

const Achievement = styled.a`
  background: #112240;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #64FFDA;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  color: #CCD6F6;
  text-decoration: none;
  cursor: pointer;
  display: block;

  h3 {
    color: #64FFDA;
    margin-bottom: 15px;
    @media (max-width: 600px) {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
  }

  p {
    color: #8892B0;
    line-height: 1.6;
    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    padding: 12px;
  }
`;

function Achievements() {
  return (
    <AchievementsContainer>
      <Header>Achievements</Header>
      <AchievementsGrid>
        <Achievement href={pythonCertificate} target="_blank" rel="noopener noreferrer">
          <h3>Certification in Python</h3>
          <p>I have completed my certification in Python from DataCamp.</p>
        </Achievement>
        <Achievement href={mongodbCertificate} target="_blank" rel="noopener noreferrer">
          <h3>Certification in MongoDB Associate developer pack</h3>
          <p>I have completed my certification in MongoDB Associate developer pack from Official MongoDB website.</p>
        </Achievement>
        <Achievement href={dsaCertificate} target="_blank" rel="noopener noreferrer">
          <h3>Certification in DSA</h3>
          <p>I have completed my certification in DSA from NPTEL.</p>
        </Achievement>
      </AchievementsGrid>
    </AchievementsContainer>
  );
}

export default Achievements;