

  import { useEffect, useState } from 'react';

  export function useDetail(id) {
    const [detail, setDetail] = useState([]);
  
    useEffect(() => {
      const fetchDetail = async () => {
        const res = await fetch(`http://localhost:4000/menus/${id}`, {
          next: {
            revalidate: 0 // use 0 to opt out of using cache
          }
        });
        const data = await res.json();
        setDetail(data);
      };
  
      fetchDetail();
    }, [id]); // Add id to the dependency array of useEffect
  
    return detail;
  }