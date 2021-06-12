import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: "ui",
    initialState: { showCart: false, openMenu: false, bike: "", showOrders: false },
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        },
        toggleMenu(state) {
            state.openMenu = !state.openMenu;
        },
        onBike(action) {
            const bike = action.payload;
            console.log(bike);
        }, toggleOrders(state) {
            state.showOrders = !state.showOrders;
        }
    }
});

export const uiAction = uiSlice.actions;
export default uiSlice;
