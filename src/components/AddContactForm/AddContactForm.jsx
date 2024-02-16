import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useContacts } from 'hooks/useContacts';
import { addContact } from '../../redux/contacts/operations';
import {
  FormField,
  Label,
  Input,
  Button,
} from '../RegisterForm/RegisterForm.styled';
import { notifyWarn } from 'components/Notification/Notification';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts, isLoading, error } = useContacts();
  const dispatch = useDispatch();

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const searchedContactName = contacts.find(contact => contact.name === name);
    const searchedContactNumber = contacts.find(
      contact => contact.number === number
    );

    if (searchedContactName) {
      notifyWarn(`${name} is existed in contacts`);
      return;
    }

    if (searchedContactNumber) {
      notifyWarn(`${number} is existed in contacts`);
      return;
    }

    if (error) {
      notifyWarn(`Name ${name} has been not added`);
      return;
    }

    dispatch(addContact({ name, number }));
    notifyWarn(`${name} has been added successfully`);

    setName('');
    setNumber('');
  };

  const clearInput = name === '' || number === '';

  return (
    <FormField onSubmit={handleSubmit}>
      <Label htmlFor="nameId">
        Name
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Label htmlFor="telId">
        Phone
        <Input
          id="telId"
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Button disabled={isLoading || clearInput}>Add contact</Button>
    </FormField>
  );
};
