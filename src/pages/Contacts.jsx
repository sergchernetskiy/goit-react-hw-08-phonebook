import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getContacts } from '../redux/contacts/operations';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/Container/Container.styled';
import { ContactList } from 'components/ContactsList/ContactsList';

const UserContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <AddContactForm typeSubmit={'Add contact'} />
        <Filter />
        <ContactList />
      </Container>
    </main>
  );
};

export default UserContacts;
