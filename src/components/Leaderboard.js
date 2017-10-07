import React from 'react';
import styled from 'styled-components';

const Leaderboard = ({ ...props }) => (
  <Board>
    <Title>Leaderboard</Title>
    <Players>
      {props.leaderboard
        .filter(u => u.username)
        .filter(u => u.kebabs)
        .map((user, i) => {
          switch (i) {
            case 0:
              return (
                <Player first key={user._id}>
                  {user.username} - <Kebabs>{user.kebabs} kebabs</Kebabs>
                </Player>
              );
            case 1:
              return (
                <Player second key={user._id}>
                  {user.username} - <Kebabs>{user.kebabs} kebabs</Kebabs>
                </Player>
              );
            case 2:
              return (
                <Player third key={user._id}>
                  {user.username} - <Kebabs>{user.kebabs} kebabs</Kebabs>
                </Player>
              );
            default:
              return (
                <Player key={user._id}>
                  {user.username} - <Kebabs>{user.kebabs} kebabs</Kebabs>
                </Player>
              );
          }
        })}
    </Players>
  </Board>
);

const Title = styled.h2`
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 3px #93f9b9;
  font-weight: 400;
  font-size: 2em;
  letter-spacing: 2px;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  border-bottom: 0.33px solid #93f9b9;
`;

const margin = 35;
const Board = styled.div`
  margin: ${margin}px 20px;
  background-color: #1d976c;
  height: calc(100vh - ${margin * 2}px);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  font-family: Roboto, sans-serif;
  text-align: center;

  display: flex;
  flex-direction: column;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background: -webkit-linear-gradient(top, rgba(29, 151, 108, 0) 0%, rgba(29, 151, 108, 1) 100%);
  }
`;

const Player = styled.p`
  color: white;
  font-weight: 300;
  ${props => props.first && 'background-color: #60b698'} 
  ${props => props.second && 'background-color: #4aab89'}
  ${props => props.third && 'background-color: #33a17a;'};
  padding: 20px;
  margin: 0;
`;

const Players = styled.div`
  flex: 1;
  overflow: scroll;
`;

const Kebabs = styled.span`font-weight: bold;`;

export default Leaderboard;
