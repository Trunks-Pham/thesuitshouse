import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleConfirmPayment = () => {
    // Handle payment logic here
    alert("Thanh toán thành công!");
    navigate('/'); // Redirect to home or another page after payment
  };

  return (
    <div style={{ marginLeft:'50px', marginRight:'50px', marginTop: '120px'}}>
      <h2 style={{textAlign: 'center'}}>Thanh Toán</h2>
      <div className="payment-form">
        {/* Add payment form fields here */}
        <button onClick={handleConfirmPayment}>Xác nhận thanh toán</button>
      </div>
    </div>
  );
};

export default PaymentPage;
