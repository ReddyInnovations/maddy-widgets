import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Section = styled.section`
  background: linear-gradient(135deg, #0a192f, #020c1b);
  color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

export const Text = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #ffffff;
    font-weight: 300;
  }

  h2 {
    font-size: 3rem;
    color: #00aaff;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    margin-top: 1rem;

    span {
      color: #00d4ff;
      font-weight: bold;
    }
  }

  p {
    margin-top: 1rem;
    color: #d9d9d9;
    line-height: 1.8;
    max-width: 500px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  font-size: 2rem;

  svg {
    color: #00aaff;
    cursor: pointer;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: #ffffff;
      transform: scale(1.2);
    }
  }
`;

export const StyledLink = styled(RouterLink)`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #00aaff, #0077cc);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(to right, #0077cc, #005f99);
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 15px #00d4ff, 0 0 30px #00d4ff, 0 0 60px #ff0066, 0 0 90px #ff0066;
  }
  50% {
    box-shadow: 0 0 25px #ff0066, 0 0 50px #ff0066, 0 0 100px #00d4ff, 0 0 150px #00d4ff;
  }
  100% {
    box-shadow: 0 0 15px #00d4ff, 0 0 30px #00d4ff, 0 0 60px #ff0066, 0 0 90px #ff0066;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(to right, #00aaff, #ff0066);
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${glow} 3s infinite ease-in-out;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
