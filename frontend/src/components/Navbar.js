import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1.5rem 4rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 0.5rem;
  }
`;

const Logo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  @media (max-width: 700px) {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  color: ${props => props.active ? '#64FFDA' : '#CCD6F6'};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #64FFDA;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #64FFDA;
    &:after {
      width: 100%;
    }
  }
`;

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav>
      <Logo onClick={() => scrollToSection('home')}>Portfolio</Logo>
      <NavList>
        <NavItem><NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink></NavItem>
        <NavItem><NavLink active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>Skills</NavLink></NavItem>
        <NavItem><NavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavLink></NavItem>
        <NavItem><NavLink active={activeSection === 'achievements'} onClick={() => scrollToSection('achievements')}>Achievements</NavLink></NavItem>
        <NavItem><NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;