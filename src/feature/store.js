import { configureStore } from '@reduxjs/toolkit';
import quickViewSlice from './QuickView/quickViewSlice';


export default configureStore({
  reducer: {
    quickView: quickViewSlice
  }
});