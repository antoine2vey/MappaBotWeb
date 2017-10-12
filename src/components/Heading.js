import React from 'react';
import styled from 'styled-components';

const Heading = ({ name, shouldResize }) => (
  <div>
    <Title isMedium={shouldResize}>{name}</Title>
  </div>
);

const Title = styled.h1`
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: ${props => (props.isMedium ? '3em' : '6em')};
  letter-spacing: 5px;
  font-weight: 300;
  text-transform: uppercase;
  text-shadow: 1px 4px #93f9b9;
  margin: ${props => (props.isMedium ? '0 0 20px 0' : '0 0 25px 0')};
  text-align: center;
`;

export default Heading;
