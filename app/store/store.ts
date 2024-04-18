// store.js
import { create } from 'zustand';
import axios from 'axios';

type State = {
  cartItems: any[]; // Define the type of cartItems as needed
  addToCart: (item: any) => void; // Define the type of addToCart function
};

export const useStore = create<State>((set) => ({
  cartItems: [],
  addToCart: async (item) => {
    try {
      // Make a POST request to the JSON server to add the item to the cart
      const response = await axios.post('http://localhost:4000/cart', item);
      const addedItem = response.data;

      set((state) => ({
        cartItems: [...state.cartItems, addedItem],
      }));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  },
}));
