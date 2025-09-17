import React from "react";
import jsPDF from "jspdf";
import "./Bill.css";

const Bill = ({ order }) => {
  // Calculate total dynamically
  const total = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Optional: Store logo
    if (order.storeLogo) {
      doc.addImage(order.storeLogo, "PNG", 10, 10, 50, 15);
    }

    // Title
    doc.setFontSize(18);
    doc.text("Food Delivery Bill", 70, 20);

    // Order info
    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`Customer: ${order.customerName}`, 20, 50);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 20, 60);

    // Items
    let y = 80;
    doc.text("Items:", 20, y);
    order.items.forEach((item, index) => {
      y += 10;
      doc.text(`${index + 1}. ${item.name} x${item.qty} - ₹${item.price * item.qty}`, 30, y);
    });

    // Total
    y += 20;
    doc.setFontSize(14);
    doc.text(`Total: ₹${total}`, 20, y);

    doc.save(`bill_${order._id}.pdf`);
  };

  return (
    <div className="bill-card">
      <h2>Bill Summary</h2>
      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>

      <h3>Items</h3>
      <ul>
        {order.items.map((item, idx) => (
          <li key={idx}>
            {item.name} x{item.qty} = ₹{item.price * item.qty}
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total}</h3>

      <button className="bill-btn" onClick={generatePDF}>
        Download Bill
      </button>
    </div>
  );
};

export default Bill;
