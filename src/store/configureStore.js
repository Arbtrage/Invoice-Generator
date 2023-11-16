import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from '../features/invoices/invoiceSlice';

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});
