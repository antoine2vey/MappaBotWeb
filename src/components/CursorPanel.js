import React from 'react';
import styled from 'styled-components';
import Arrow from 'react-icons/lib/fa/long-arrow-right';

const CursorPanel = ({ onStatsClick }) => (
  <div>
    <Cursor onClick={() => onStatsClick()}>
      <Arrow size={40} color={'white'} style={{ marginRight: 15 }} className="arrow" />
      Leaderboard
      <Realtime>realtime update</Realtime>
    </Cursor>
  </div>
);

const Realtime = styled.p`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-top: 35px;
  text-align: right;
  width: 100%;
  font-size: 22px;
`;

const Cursor = styled.div`
  position: absolute;
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
  }

  &:hover {
    text-shadow: 2px 3px #1d976c;

    .arrow {
      transform: translateX(-5px);
    }
  }
`;

export default CursorPanel;
