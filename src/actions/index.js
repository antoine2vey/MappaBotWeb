// eslint-disable-next-line
import io from 'socket.io-client';
import { RECEIVE_USERS, TOGGLE_LEADERBOARD, TOGGLE_LEADERBOARD_ZONE } from '../actionTypes';

let ws;
// eslint-disable-next-line
process.env.NODE_ENV !== 'development'
  ? (ws = io.connect(`${window.location.hostname}`))
  : (ws = io.connect(`${window.location.protocol}//${window.location.hostname}:8080`));

export const fetchUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const toggleLeaderboard = () => ({
  type: TOGGLE_LEADERBOARD,
});

export const toggleZone = zone => ({
  type: TOGGLE_LEADERBOARD_ZONE,
  zone,
});

export const addListener = (wsEvent, action) => (dispatch) => {
  ws.on(wsEvent, (data) => {
    switch (action) {
      case RECEIVE_USERS:
        return dispatch(fetchUsers(data));
      default:
        return false;
    }
  });
};
