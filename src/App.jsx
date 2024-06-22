
import { ContactForm } from "./components/Form/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectLoading } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  console.log(contacts)
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