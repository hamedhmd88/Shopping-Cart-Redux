import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../features/product/productsSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    },
})

export default store;







