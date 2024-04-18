import React from 'react';
import axios from 'axios';


export const removeFromCart = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:4000/cart/${id}`);
    console.log('Item removed from cart successfully');
    window.location.reload(); // Refresh the page
  } catch (error) {
    console.error('Error removing item from cart:', error);
  }
};
