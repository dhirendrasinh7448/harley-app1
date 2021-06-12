import { configureStore } from '@reduxjs/toolkit';
import uiSlice from "../store/uiSlice";
import cartSlice from './cartSlice';


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;