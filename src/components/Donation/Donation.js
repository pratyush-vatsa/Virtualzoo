import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DonationPage from './DonationPage';
function Donation() {
  return (
    <div>
      <div className="Donation">
        <Header />
        <DonationPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default Donation;
