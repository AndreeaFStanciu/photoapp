import React, { useState } from 'react';
import './Albums.css';

const Albums = () => {
  const [inputs, setInputs] = useState({
    album1015: '',
    album1318: '',
    albumA4: '',
    photosNo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Validate if the input value is a positive number
    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < 0) {
      return; // Do not update the state if the value is not valid
    }
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({
      album1015: '',
      album1318: '',
      albumA4: '',
      photosNo: '',
    });
  };

  const totalPrice =
    (parseFloat(inputs.album1015) +
      parseFloat(inputs.album1318) +
      parseFloat(inputs.albumA4)) *
    parseFloat(inputs.photosNo) *
    2;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        No of Albums (10x15):
        <input
          type="number"
          name="album1015"
          value={inputs.album1015}
          onChange={handleChange}
          min="0" // Set the minimum value to 0
          step="any" // Allow any decimal value
        />
      </label>
      <br />
      <label>
        No of Albums (13x18):
        <input
          type="number"
          name="album1318"
          value={inputs.album1318}
          onChange={handleChange}
          min="0"
          step="any"
        />
      </label>
      <br />
      <label>
        No of Albums (A4):
        <input
          type="number"
          name="albumA4"
          value={inputs.albumA4}
          onChange={handleChange}
          min="0"
          step="any"
        />
      </label>
      <br />
      <label>
        No. of uploaded photos (2EUR/photo):
        <input
          type="number"
          name="photosNo"
          value={inputs.photosNo}
          onChange={handleChange}
          min="0"
          step="any"
        />
      </label>
      <br />
      <p>Total Price (EUR): {totalPrice}</p>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Albums;
