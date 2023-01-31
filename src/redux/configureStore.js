import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketReducer';
import missionReducer from './missions/missionReducer';

export default configureStore({
  reducer: {
    rocketReducer,
    mission: missionReducer.reducer,
  },
});
