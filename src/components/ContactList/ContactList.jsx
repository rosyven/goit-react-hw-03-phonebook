import React from 'react';

export const ContactList = ({ contacts, onDelete }) => (
  <div>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);