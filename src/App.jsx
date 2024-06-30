
import { ContactForm } from "./components/Form/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";



export const App = () => {
  const dispatch = useDispatch();
 
useEffect(() => {dispatch(fetchContacts())},[dispatch])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;