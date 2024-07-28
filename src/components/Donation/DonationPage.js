import React, { useState } from 'react';
import './DonationPage.css'; 

function DonationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    donationAmount: '',
    paymentType: 'Credit Card' 
  });
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setTimeout(() => {
      setTransactionSuccess(true);
    }, 1500);
  };

  return (
    <div>
      <p className='p'>Protecting wildlife is crucial for maintaining ecological balance and preserving the beauty of our planet. By donating to wildlife funds, you support vital initiatives aimed at conserving endangered species, safeguarding their habitats, and combating threats like poaching and habitat destruction. Your contribution helps ensure that future generations can continue to marvel at the diversity of life on Earth and enjoy the wonders of nature. Join us in our mission to protect and preserve our planet's precious wildlife for generations to come. Every donation makes a difference.</p>
      <div className="donation-container">
        <h2 className="donation-title">Donate to the WildLife Cares</h2>
        {transactionSuccess ? (
          <div className="transaction-success">
            <p className="success-message">Transaction Successful!</p>
            <div className="transaction-details">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
              <p><strong>Donation Amount (₹):</strong> {formData.donationAmount}</p>
              <p><strong>Payment Type:</strong> {formData.paymentType}</p>
            </div>
          </div>
        ) : (
          <form className="donation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name:</label>
              <input 
                className="form-input"
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input 
                className="form-input"
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number:</label>
              <input 
                className="form-input"
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Donation Amount (₹):</label>
              <input 
                className="form-input"
                type="number" 
                name="donationAmount" 
                value={formData.donationAmount} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Payment Type:</label>
              <select 
                className="form-input"
                name="paymentType" 
                value={formData.paymentType} 
                onChange={handleChange}
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            <button className="submit-button" type="submit">Pay</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default DonationPage;
