import { useEffect, useState } from 'react';

export function useMenus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus =  async() => {
      const res = await fetch('/menus', {
        next: {
          revalidate: 0 // use 0 to opt out of using cache
        }
      });
      const data = await res.json();
      setMenus(data);
    };

    fetchMenus();
  }, []);

  return menus;
}
