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
  status: "",
};

export const addAsync = createAsyncThunk("invoices/addInvoice", async({data,navigate}) => {
  const response = await addInvoice(data);
  navigate('/');
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
  async ({data,navigate}) => {
    const response = await copyInvoice(data);
    navigate('/');
    return response;
  }
);
export const modifyAsync = createAsyncThunk(
  "invoices/modifyInvoice",
  async ({ data, navigate }) => {
    console.log("object")
    const response = await modifyInvoice(data);
    navigate('/');
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
        state.invoices= action.payload;
        state.status = "New Invoice Added";
        console.log(state.status);
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.invoices = action.payload;
      })
      .addCase(modifyAsync.fulfilled, (state, action) => {
        state.status = "Invoice Modified";
        state.invoices = action.payload;
        console.log(action.payload);
        console.log("object")
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "Invoice Deleted";
        state.invoices = action.payload;
      })
      .addCase(copyAsync.fulfilled, (state, action) => {
        state.status = "Invoice Copied";
        state.invoices = action.payload;
        console.log(state.status);
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectInvoice = (state) => state.invoices.invoices;
export const selectStatus = (state) => state.invoices.status;
export default invoiceSlice.reducer;
