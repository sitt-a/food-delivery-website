"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderPage({ productId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Perform checkout logic here, e.g., send the order to the server
    const orderData = {
      productId: productId,
      name: formData.name,
      location: formData.location,
      phoneNumber: formData.phoneNumber,
    };
    console.log('Placing order:', orderData);
    // Redirect to a thank you page or perform other actions after checkout
    router.push('/thank-you');
  };

  return (
    <div>
      <h2>Order Page</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleCheckout}>Checkout</button>
      </form>
    </div>
  );
}
