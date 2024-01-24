import { configureStore } from '@reduxjs/toolkit';
import invoiceSlice from './reducers/invoices/invoiceSlice';
import authReducer from './reducers/auth/authReducer';


export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
