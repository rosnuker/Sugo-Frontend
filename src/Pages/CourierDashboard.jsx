import React, { useEffect, useState } from 'react';

export default function CourierDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8080/getAllOrders');

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handlePickOrder = (orderId) => {
    // Implement logic to handle the order picking action
    // You can send a request to the backend to update the order status or perform any necessary actions
    console.log(`Order ${orderId} picked`);
  };

  return (
    <div className='gradientbg_2'>
      <h2 style={{ textAlign: 'center', marginTop: '0px' }}>All Orders</h2>

       {loading && <p>Loading...</p>}
       {error && <p>Error: {error}</p>}

       {!loading && !error && (
         <div style={{ textAlign: 'center' }}>
           <table style={{ borderCollapse: 'collapse', width: '80%', margin: 'auto', border: '1px solid black', backgroundColor: 'white' }}>
             <thead>
               <tr>
                 <th style={{ border: '1px solid black' }}>Order ID</th>
                 <th style={{ border: '1px solid black' }}>User</th>
                 <th style={{ border: '1px solid black' }}>Courier</th>
                 <th style={{ border: '1px solid black' }}>Amount To Pay</th>
                 <th style={{ border: '1px solid black' }}>Method</th>
                 <th style={{ border: '1px solid black' }}>Message</th>
                 <th style={{ border: '1px solid black' }}>Location</th>
                 <th style={{ border: '1px solid black' }}>Status</th>
                 <th style={{ border: '1px solid black' }}>Actions</th>
               </tr>
             </thead>
             <tbody>
               {orders.map(order => (
                 <tr key={order.oid}>
                   <td style={{ border: '1px solid black' }}>{order.oid}</td>
                   <td style={{ border: '1px solid black' }}>{order.user ? order.user.lname : 'N/A'}</td>
                   <td style={{ border: '1px solid black' }}>{order.courier ? order.courier.lname : 'N/A'}</td>
                   <td style={{ border: '1px solid black' }}>{order.amountToPay}</td>
                   <td style={{ border: '1px solid black' }}>{order.method}</td>
                   <td style={{ border: '1px solid black' }}>{order.message}</td>
                   <td style={{ border: '1px solid black' }}>{order.location}</td>
                   <td style={{ border: '1px solid black' }}>{order.status}</td>
                   <td style={{ border: '1px solid black' }}>
                     <button onClick={() => handlePickOrder(order.oid)}>Pick Order</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}
     </div>
  );
}