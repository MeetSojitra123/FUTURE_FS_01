import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #0A192F;
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 80px 40px 20px;
  scroll-margin-top: 80px;
`;

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Navbar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="achievements">
        <Achievements />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </MainContainer>
  );
}

export default App;
