// import './App.css'
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operation';
import { getError, getIsLoading } from '../redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <Form />
      <ContactFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      {/* {error && <p>{error}</p>} */}
      <ContactList />
    </div>
  );
};