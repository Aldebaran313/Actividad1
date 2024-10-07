import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setContacts(data);
        setFilteredContacts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener contactos:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setFilteredContacts([...filteredContacts, newContact]); // También actualiza la lista filtrada
  };

  return (
    <div className="App">
      <h1>Lista de contactos</h1>
      <AddContact onAdd={handleAddContact} />
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Cargando....</p> : <ContactList contacts={filteredContacts} />}
    </div>
  );
}

export default App;
