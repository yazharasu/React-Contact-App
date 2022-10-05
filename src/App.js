import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ContactsPage from './Components/ContactsPage';
import AddContact from './Components/AddContact';

function App() {
  const [ addContact, setAddContact ] = useState(false)

  const toggleAddContact = () => {
    setAddContact(!addContact)
  }

  return (
    <div className="App">
      <Header/>
      { addContact && <AddContact setAddContact={setAddContact} /> }
      <ContactsPage  addContact={addContact} toggleAddContact={toggleAddContact} />
    </div>
  );
}

export default App;
