import React, { useState } from 'react';

const Address = () => {
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    street: '',
    streetNo: '',
    city: '',
    zipCode: '',
    country: '',

  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Validate if the input value is a positive integer
    if (name === 'zipCode' && (isNaN(value) || value <= 0 || !Number.isInteger(Number(value)))) {
      return; // Do not update the state if the value is not valid
    }
    
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({
      name: '',
      surname: '',
      street: '',
      streetNo: '',
      city: '',
      zipCode: '',
      country: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={inputs.surname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={inputs.street}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Street No:
        <input
          type="text"
          name="streetNo"
          value={inputs.streetNo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={inputs.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="number"
          name="zipCode"
          value={inputs.zipCode}
          onChange={handleChange}
          min="1" // Set the minimum value to 1
          step="1" // Restrict input to integers
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={inputs.country}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Address;
