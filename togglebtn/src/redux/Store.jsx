import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './Slice';

const Store = configureStore({
  reducer: {
    app: userDetailReducer,
  },
});

export default Store;
