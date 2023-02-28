import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../contents/theme/themeSlice';
import workReducer from '../contents/work/workSlice';
import playReducer from '../contents/play/playSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    work: workReducer,
    play: playReducer
  }
});
