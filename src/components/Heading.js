import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 6em;
  letter-spacing: 5px;
  font-weight: 300;
  text-transform: uppercase;
  text-shadow: 1px 4px #93f9b9;
  margin: 0 0 25px 0;
  text-align: center;
`;

const Heading = ({ name }) => (
  <div>
    <Title>
      {name}
    </Title>
  </div>
);

export default Heading;
