import React from 'react';
import styled from 'styled-components';

const Leaderboard = ({ ...props }) => {
  const isKebab = zone => zone === 'kebab';
  const isFirst = zone => zone === 'first';

  return (
    <Board>
      <LeaderboardHeading>
        <Title
          active={isKebab(props.zone)}
          onClick={() => props.toggleZone('kebab')}
        >
          Leaderboard
        </Title>
        <Title
          active={isFirst(props.zone)}
          onClick={() => props.toggleZone('first')}
        >
          Firsts
        </Title>
      </LeaderboardHeading>
      <Players>
        {props.users
          .filter(u => u.username)
          .filter(u => (isKebab(props.zone) ? u.kebabs : true)) // filter if kebab mode
          .filter(u => (isFirst(props.zone) ? u.firstCount >= 1 : true)) // filter if first mode
          .sort(
            (a, b) =>
              (isFirst(props.zone) ? b.firstCount - a.firstCount : b.kebabs - a.kebabs),
          )
          .map((user, i) => (
            <Player
              first={i === 0}
              second={i === 1}
              third={i === 2}
              key={user._id}
            >
              {user.username} - {' '}
              <Units>
                {isKebab(props.zone) ? user.kebabs : user.firstCount}
                {isKebab(props.zone) ? ' kebabs' : ' firsts'}
              </Units>
            </Player>
          ))}
      </Players>
    </Board>
  );
};

const LeaderboardHeading = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.33px solid #93f9b9;
`;

const Title = styled.h2`
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1.33px 1px #93f9b9;
  font-weight: 400;
  font-size: 1.3em;
  letter-spacing: 2px;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  opacity: ${props => !props.active && 0.4};
  cursor: pointer;
  transition: all 0.1s ease-in;
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
  ${props => props.first && 'background-color: #60b698'} ${props =>
  props.second && 'background-color: #4aab89'} ${props =>
  props.third && 'background-color: #33a17a;'};
  padding: 20px;
  margin: 0;
`;

const Players = styled.div`
  flex: 1;
  overflow: scroll;
`;

const Units = styled.span`
  font-weight: bold;
`;

export default Leaderboard;
