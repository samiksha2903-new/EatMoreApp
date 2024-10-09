import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    display: [],
    order: [],
  },
  reducers: {
    displayItem: (state, action) => {
      const items = {
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        price: action.payload.price,
        desc: action.payload.desc,
        rating: action.payload.rating,
        category: action.payload.category,
        qty: action.payload.qty || 1,
      };

      state.display.push(items);
    },
    
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push({ ...action.payload, qty: action.payload.qty || 1 });
      }
    },

    removeFromCart: (state, action) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem !== -1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },

    incrementQty: (state, action) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem !== -1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    },

    decrementQty: (state, action) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem !== -1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
            : item
        );
      }
    },

    Orders: (state, action) => {
      const existingItem = state.order.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        console.log("existinggg,,", existingItem);
        state.order = state.order.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item
        );
      } else {
        state.order.push({ ...action.payload });
      }
    },

    removeFromOrders: (state, action) => {
      const findItem = state.order.find((item) => item.id === action.payload.id);
      if (findItem !== -1) {  
        state.order = state.order.filter((item) => item.id !== action.payload.id);
      }
    },

    removeWhenOrderPlaced: (state) => {
      state.order.forEach((orderedItem) => {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== orderedItem.id);
      });
    }
    
  },
});

export const {
  displayItem,
  removeFromCart,
  addToCart,
  incrementQty,
  decrementQty,
  Orders,
  removeFromOrders,
  removeWhenOrderPlaced,
} = cartSlice.actions;
export default cartSlice.reducer;