import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addInvoice, fetchInvoices, modifyInvoice } from "./invoiceAPI";

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
    console.log(response);
    return response;
  }
);

export const modifyAsync = createAsyncThunk("invoices/modifyInvoice", async (data) => {
  const response = await modifyInvoice(data);
  console.log(response);
  return response;
})

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
      .addCase(modifyAsync.fulfilled, (state,action) => {
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
