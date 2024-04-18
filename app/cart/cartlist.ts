import { useEffect, useState } from 'react';

export function useCart() {
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch('http://localhost:4000/cart', {
        next: {
          revalidate: 30// use 0 to opt out of using cache
        }
      });
      const data = await res.json();
      setCart(data);
    };

    fetchCart();
  }, []);

  return Cart;
}
