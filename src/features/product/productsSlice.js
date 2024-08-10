import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/config";


const initialState = {
    loading: false,
    products: [],
    error: "",
};

const fetchProduct = createAsyncThunk("product/fetchProduct", () => {
    return api.get("/products")
})


const productsSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = "";
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.payload.message;
            
        });
    }
});


export default productsSlice.reducer;
export {fetchProduct};


