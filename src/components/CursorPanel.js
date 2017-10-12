import React from 'react';
import styled from 'styled-components';
import Arrow from 'react-icons/lib/fa/long-arrow-right';

const CursorPanel = ({ onStatsClick, shouldBreak }) => (
  <Cursor onClick={() => onStatsClick()} shouldBreak={shouldBreak}>
    <Arrow size={40} color={'white'} style={{ marginRight: 15 }} className="arrow" />
    Leaderboard
    <Realtime shouldBreak={shouldBreak}>realtime update</Realtime>
  </Cursor>
);

const Realtime = styled.p`
  position: ${props => (props.shouldBreak ? 'static' : 'absolute')};
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-top: 35px;
  text-align: right;
  width: 100%;
  font-size: 22px;

  ${props =>
    props.shouldBreak &&
    `
    top: initial;
    right: initial;
    transform: none;
    margin: 0;
    text-align: center;
  `};
`;

const Cursor = styled.div`
  position: ${props => (props.shouldBreak ? 'static' : 'absolute')};
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
  text-transform: uppercase;
  font-family: Oswald;
  font-size: 35px;
  letter-spacing: 3px;
  text-shadow: 1px 2px #1d976c;
  user-select: none;
  transition: all 0.2s ease;

  .arrow {
    transform: translateX(0px);
    transition: transform 0.2s ease;
    display: ${props => (props.shouldBreak ? 'none' : 'block')};
  }

  &:hover {
    text-shadow: 2px 3px #1d976c;

    .arrow {
      transform: translateX(-5px);
    }
  }

  ${props =>
    props.shouldBreak &&
    `
    top: initial;
    right: initial;
    transform: none;
    margin-left: 0;
    flex-direction: column;
    margin-top: 20px;
  `};
`;

export default CursorPanel;
