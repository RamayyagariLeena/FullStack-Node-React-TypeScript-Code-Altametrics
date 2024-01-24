import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface InvoiceState {
  invoices: any[]; // Replace 'any' with your Invoice type
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: InvoiceState = {
  invoices: [],
  status: 'idle',
  error: null,
};

export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async () => {
    const response = await axios.get('http://localhost:3000/invoices');
    return response.data;
  }
);

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch invoices';
      });
  },
});

export default invoiceSlice.reducer;
