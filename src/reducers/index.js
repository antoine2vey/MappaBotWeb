import { combineReducers } from 'redux';
import { RECEIVE_USERS, TOGGLE_LEADERBOARD } from '../actionTypes';

const initialState = {
  users: [],
  shown: false,
};

const leaderboard = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    case TOGGLE_LEADERBOARD:
      return {
        ...state,
        shown: !state.shown,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  leaderboard,
});

export default rootReducer;
