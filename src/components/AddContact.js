import React, { useState } from 'react';

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: Date.now(), // Genera un ID único basado en la fecha y hora actual
      name,
      email,
      phone,
    };
    onAdd(newContact); // Llama a la función pasada como prop
    setName(''); // Limpia el campo de nombre
    setEmail(''); // Limpia el campo de email
    setPhone(''); // Limpia el campo de teléfono
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;