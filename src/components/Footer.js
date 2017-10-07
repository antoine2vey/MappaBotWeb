import React from 'react';
import styled from 'styled-components';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => (
  <FooterContainer>
    <List>
      <Item>
        Made by <Link href="https://antoinedeveyrac.io">me</Link>
      </Item>
      <Item>
        <Link href="https://github.com/antoine2vey/mappabot">
          <Icon src={github} />
        </Link>
      </Item>
      <Item>
        <Link href="https://twitter.com/_shaark">
          <Icon src={twitter} />
        </Link>
      </Item>
    </List>
  </FooterContainer>
);

const Item = styled.li`margin-right: 15px;`;
const Icon = styled.img`width: 20px;`;

const FooterContainer = styled.footer`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  color: #fff;

  display: flex;
`;

const Link = styled.a`
  color: #fff;
  transition: transform 0.2s ease;
  transform: translateY(0);
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
  }
`;

export default Footer;
