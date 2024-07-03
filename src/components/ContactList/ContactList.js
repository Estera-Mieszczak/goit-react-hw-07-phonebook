import css from "./ContactList.module.css";
import { Contact } from 'components/Contact/Contact';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";

// const getFilteredContacts = (contacts, filter) => {

//     contacts.filter(contact => contact.name?.includes(filter));
//     return contacts;
// };

export const ContactList = () => { 

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filter.filter
  
  return (
    <ul className={css.ul}>
          {contacts
            .filter((contact) => 
              contact.name.toLowerCase().includes(filteredContacts.toLowerCase()),
              )
            .map((contact) => (
            <li className={css.li} key={contact.id}>
                <Contact contact={contact} />
            </li>))}
      </ul>
  )
};