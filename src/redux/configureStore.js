import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketReducer';

export default configureStore({
  reducer: {
    rocketReducer,
  },
});
