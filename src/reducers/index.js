import { combineReducers } from 'redux';
import { responsiveStateReducer as browser } from 'redux-responsive';
import { RECEIVE_USERS, TOGGLE_LEADERBOARD, TOGGLE_LEADERBOARD_ZONE } from '../actionTypes';

const initialState = {
  users: [],
  shown: false,
  zone: 'kebab',
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
    case TOGGLE_LEADERBOARD_ZONE:
      return {
        ...state,
        zone: action.zone,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  leaderboard,
  browser,
});

export default rootReducer;
