import React, { useState } from 'react';

const SHSForm = () => {
  const [formData, setFormData] = useState({
    idNumber: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
  });

  const [qrCode, setQrCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/participants/Shs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setQrCode(data.qrCode);
        alert('SHS student registered successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Request failed: ' + err.message);
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required />
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="middleInitial" placeholder="Middle Initial" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <button type="submit">Register</button>

      {qrCode && (
        <div style={{ marginTop: '20px' }}>
          <h4>Your QR Code:</h4>
          <img src={qrCode} alt="QR Code" />
        </div>
      )}
    </form>
    </div>
  );
};

export default SHSForm;
