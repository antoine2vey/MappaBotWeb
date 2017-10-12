import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import Leaderboard from './Leaderboard';

const Stats = styled.div`
  background-color: #fff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  height: 100vh;
  width: ${props => (props.shouldBreak ? 'calc(100vw - 60px)' : '380px')};
  top: 0;
  position: absolute;
  left: 0;
  z-index: 1;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  top: 0;
  position: absolute;
  left: 0;
`;

const StatsPanel = ({ ...props }) => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear
    transitionAppearTimeout={100}
    transitionEnter
    transitionEnterTimeout={100}
    transitionLeave
    transitionLeaveTimeout={100}
  >
    <Stats shouldBreak={props.isMedium}>
      <Leaderboard {...props} />
    </Stats>
    <Background onClick={props.toggleLeaderboard} />
  </CSSTransitionGroup>
);

export default StatsPanel;
