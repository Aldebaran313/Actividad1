import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactCard;
