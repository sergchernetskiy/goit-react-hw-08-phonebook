import { useEffect } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/operations';
import { Box } from '../components/Box';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Title, TitleContacts } from './Title/Title.styled';
import { Container } from './Container/Container.styled';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={[4]}>
      <Container>
        <Toaster />
        <Title>Phonebook</Title>
        <Form />

        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {!isLoading && error && <p>{error}</p>}
        {contacts.length > 0 && !error ? (
          <ContactList />
        ) : (
          <TitleContacts>Phonebook is empty</TitleContacts>
        )}
        {isLoading && <p>Loading...</p>}
      </Container>
    </Box>
  );
};

export default App;
