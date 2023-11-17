import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addInvoice,
  fetchInvoices,
  modifyInvoice,
  copyInvoice,
  deleteInvoice,
} from "./invoiceAPI";

const initialState = {
  invoices: [],
  status: "idle",
};

export const addAsync = createAsyncThunk("invoices/addInvoice", async (inc) => {
  const response = await addInvoice(inc);
  return response;
});

export const fetchAsync = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await fetchInvoices();
    return response;
  }
);

export const deleteAsync = createAsyncThunk("invoices/deleteInvoice", async (id) => {
  const response = await deleteInvoice(id);
  return response;
})
export const copyAsync = createAsyncThunk(
  "invoices/copyInvoice",
  async (data) => {
    const response = await copyInvoice(data);
    return response;
  }
);
export const modifyAsync = createAsyncThunk(
  "invoices/modifyInvoice",
  async (data) => {
    const response = await modifyInvoice(data);
    return response;
  }
);

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.fulfilled, (state, action) => {
        state.invoices.push(action.payload);
      })
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.invoices = action.payload;
      })
      .addCase(modifyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.invoices = action.payload;
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.invoices = action.payload;
      })
      .addCase(copyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.invoices = action.payload;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectInvoice = (state) => state.invoices.invoices;
export default invoiceSlice.reducer;
