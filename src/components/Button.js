import React from 'react';
import styled from 'styled-components';

const Button = ({ link, children }) => (
  <div>
    <Link href={link}>{children}</Link>
  </div>
);

const Link = styled.a`
  color: #1d976c;
  padding: 8px 16px;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid #fff;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease-in;
  transform: translateY(0);
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 1px 4px 3px #1d976c;
  }
`;

export default Button;
