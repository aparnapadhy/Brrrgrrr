import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import jsPDF from "jspdf";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency, user } = useContext(StoreContext); // user contains logged-in customer info

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  // Function to download bill as PDF
  const downloadBill = (order) => {
    const total = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const doc = new jsPDF();

    // Ensure proper rupee symbol rendering
    doc.setFont("helvetica", "normal");

    // Optional store logo
    if (order.storeLogo) {
      doc.addImage(order.storeLogo, "PNG", 10, 10, 50, 15);
    }

    // Bill title
    doc.setFontSize(18);
    doc.text("Food Delivery Bill", 70, 20);

    // Order details
    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`Customer: ${order.customerName || user?.name || "Guest"}`, 20, 50);
    doc.text(
      `Date: ${order.createdAt ? new Date(order.createdAt).toLocaleDateString() : new Date().toLocaleDateString()}`,
      20,
      60
    );

    // Items list
    let y = 80;
    doc.text("Items:", 20, y);
    order.items.forEach((item, index) => {
      y += 10;
      doc.text(`${index + 1}. ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`, 30, y);
    });

    // Total amount
    y += 20;
    doc.setFontSize(14);
    doc.text(`Total: ₹${total}`, 20, y);

    doc.save(`bill_${order._id}.pdf`);
  };

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          data.map((order, index) => (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p>{currency}{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>

              {/* Single button for bill download */}
              <button onClick={() => downloadBill(order)}>
                Download Bill
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
