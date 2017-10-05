import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
//import WebSocket from 'ws';
import Heading from './Heading';
import Button from './Button';
import Footer from './Footer';

const Layout = styled.div`
  height: calc(100vh - 40px);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  margin: 20px;
  background-color: red;
  font-family: Roboto, sans-serif;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ws = new WebSocket('ws://localhost:8080');
class App extends Component {
  componentDidMount() {
    ws.onmessage = ({ data }) => {
      console.log(data);
    };
  }

  render() {
    return (
      <div>
        <Layout>
          <Heading name="mappa bot" />
          <Button link="https://discordapp.com/api/oauth2/authorize?client_id=336909405981376524&scope=bot&permissions=0">
            Installer sur ton serveur Discord !
          </Button>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
