import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 80px 20px 20px;
  @media (max-width: 600px) {
    padding: 80px 5px 20px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #112240;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  max-width: 500px;
  margin: 0 auto;
  min-height: 450px;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
    min-height: 350px;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  background: #233554;
  color: #CCD6F6;
  outline: none;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.5rem 0.7rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  background: #233554;
  color: #CCD6F6;
  outline: none;
  min-height: 120px;
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.5rem 0.7rem;
    min-height: 80px;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #64FFDA;
  color: #0A192F;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #52e0c4;
  }
`;

const Error = styled.div`
  color: #ff4d4f;
  font-size: 0.95rem;
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

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess('Thank you for reaching out!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    }
  };

  return (
    <ContactContainer>
      <Header>Contact Me</Header>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />
        {error && <Error>{error}</Error>}
        {success && <div style={{ color: '#64FFDA' }}>{success}</div>}
        <Button type="submit">Send Message</Button>
      </FormContainer>
    </ContactContainer>
  );
}

export default Contact;