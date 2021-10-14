import { useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import ContactRow from './components/ContactRow';
import Header from './components/Header';
import NewContact from './components/NewContact';
import TopRow from './components/TopRow';

function App() {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John",
      lastName: "Smith",
      phoneNum: "0 (800) 808 8081",
      info: "manager"
    },
    {
      id: 2,
      name: "Sara",
      lastName: "Wilson",
      phoneNum: "0 (800) 808 8082",
      info: "sara@gmail.com"
    },
    {
      id: 3,
      name: "Matthew",
      lastName: "Smith",
      phoneNum: "0 (800) 808 8083",
      info: "01.01.1991"      
    }
  ]);

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = {id, ...contact};
    setContacts([...contacts, newContact]);
  } 

  return (
    <div className="App">
      <Header />
      <AddButton onAdd={() => setShowAddContact(!showAddContact)} />
      {showAddContact && <NewContact onAdd={addContact} />}
      <TopRow />
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} setContacts={setContacts} onDelete={deleteContact} />
      ))}
    </div>
  );
}

export default App;