import React, { useState } from 'react';


const CollegeForm = () => {
  const [data, setData] = useState({ idNumber: '', firstName: '', middleInitial: '', lastName: '', program: '', yearLevel: '' });
  const [qrCode, setQrCode] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/participants/College', data);
    setQrCode(res.data.qrCode);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input name='idNumber' placeholder='ID Number' onChange={handleChange} required />
        <input name='firstName' placeholder='First Name' onChange={handleChange} required />
        <input name='middleInitial' placeholder='Middle Initial' onChange={handleChange} required />
        <input name='lastName' placeholder='Last Name' onChange={handleChange} required />
        <input name='program' placeholder='Program' onChange={handleChange} required />
        <input name='yearLevel' placeholder='Year Level' onChange={handleChange} required />
        <button type='submit'>Register</button>
      </form>

      {qrCode && (
        <div className="qr-section">
          <h4>QR Code:</h4>
          <img src={qrCode} alt='QR Code' />
          <button onClick={() => window.print()}>Print QR Code</button>
        </div>
      )}
    </div>
  );
};

export default CollegeForm;
