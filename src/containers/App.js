import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Footer from '../components/Footer';
import CursorPanel from '../components/CursorPanel';
import StatsPanel from '../components/StatsPanel';
import { addListener, toggleLeaderboard, toggleZone } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.addListener('leaderboard', 'RECEIVE_USERS');
  }

  render() {
    const { shown, isMedium, toggleLeaderboard } = this.props;
    return (
      <div>
        <Layout shouldPan={shown}>
          <Heading
            name="mappa bot"
            shouldResize={isMedium}
          />
          <Button link="https://discordapp.com/api/oauth2/authorize?client_id=336909405981376524&scope=bot&permissions=0">
            Installer sur ton serveur Discord !
          </Button>
          <CursorPanel
            onStatsClick={toggleLeaderboard}
            shouldBreak={isMedium}
          />
          <Footer />
        </Layout>

        {this.props.shown && <StatsPanel {...this.props} />}
      </div>
    );
  }
}

const Layout = styled.div`
  height: calc(100vh - 40px);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  margin: 20px;
  font-family: Roboto, sans-serif;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.3s cubic-bezier(0.38, 0.49, 0, 1);
  transform: scale(0);
  perspective-origin: left;
  will-change: transform;
  backface-visibility: hidden;

  transform: ${props => (props.shouldPan ? 'scale(0.965)' : 'scale(1);')};
  transition: ${props => props.shouldPan && 'all 0.3s cubic-bezier(0.38, 0.59, 0, 2.5)'};
`;

const mapStateToProps = ({
  leaderboard: { users, shown, zone },
  browser,
}) => ({
  users,
  shown,
  zone,
  isMedium: browser.lessThan.medium,
});

export default connect(mapStateToProps, { addListener, toggleLeaderboard, toggleZone })(App);
