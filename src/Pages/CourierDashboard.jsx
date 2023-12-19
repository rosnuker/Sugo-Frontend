import React, { useEffect, useState } from 'react';
import CustomerDrawer from './CustomerDrawer';

const OrdersList = () => {
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

  const handlePickOrder = async (orderId) => {
    try {
      const emailResponse = await fetch('http://localhost:8080/getLoggedInUserEmail');
      const email = await emailResponse.json();

      const userResponse = await fetch(`http://localhost:8080/getUserByEmail?email=${email}`);
      const user = await userResponse.json();

      const courierIdResponse = await fetch(`http://localhost:8080/getCourierIdByEmail?email=${email}`);
      const courierId = await courierIdResponse.json();

      const response = await fetch('http://localhost:8080/addCourierToOrder', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oid: orderId,
          uid: user.uid,
          cid: courierId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to pick the order');
      }

      console.log(`Order ${orderId} picked successfully`);
    } catch (error) {
      console.error('Error picking the order:', error);
    }
  };

  return (
    <div className='gradientbg_2'>
      <CustomerDrawer />

      <h2 style={{ textAlign: 'center' }}>All Orders</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div style={{ textAlign: 'center' }}>
          <table style={{ borderCollapse: 'collapse', width: '80%', margin: 'auto', backgroundColor: 'white', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
            <thead>
            <tr>
      <th style={{  padding: '8px' }}>Order ID</th>
      <th style={{  padding: '8px' }}>User</th>
      <th style={{  padding: '8px' }}>Courier</th>
      <th style={{  padding: '8px' }}>Amount To Pay</th>
      <th style={{  padding: '8px' }}>Method</th>
      <th style={{  padding: '8px' }}>Message</th>
      <th style={{  padding: '8px' }}>Location</th>
      <th style={{ padding: '8px' }}>Status</th>
      <th style={{  padding: '8px' }}>Actions</th>
    </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.oid}>
                  <td style={{ border: '1px solid black' }}>{order.oid}</td>
                  <td style={{ border: '1px solid black' }}>{order.user ? order.user.username : 'N/A'}</td>
                  <td style={{ border: '1px solid black' }}>{order.courier ? order.courier.name : 'N/A'}</td>
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
};

export default OrdersList;
