"use client"
 import React from 'react';
import Menulist from './menulist';

 import { useStore } from '../store/store';


// export default function Menu() {
//   return (
//     <useStore.Provider>
//       <div>
//         <Searchbar />
//         <Menulist />
//       </div>
//     </useStore.Provider>
//   );
// }
// Menu.js


export default function Menu() {
  const store = useStore();

  return (
    <div>
      
      <Menulist store={store} />
    </div>
  );
}

