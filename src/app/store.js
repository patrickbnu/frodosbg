import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../redux/testSlice';

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
