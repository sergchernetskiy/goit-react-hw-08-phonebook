import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError } from '../../redux/selectors';

import { FormField, Label, Input, Button } from './Form.styled';
import { notifyWarn } from 'components/Notification/Notification';
import { addContact } from '../../redux/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchedContactName = contacts.find(contact => contact.name === name);
    const searchedContactNumber = contacts.find(
      contact => contact.number === number
    );

    if (error) {
      notifyWarn(`Name ${name} has been not added`);
      return;
    }

    if (searchedContactName) {
      notifyWarn(`${name} is existed in contacts`);
      return;
    }

    if (searchedContactNumber) {
      notifyWarn(`${number} is existed in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    notifyWarn(`${name} has been added successfully`);

    reset();
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <Label htmlFor="nameId">
        Name
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          onChange={handleChange}
          placeholder="Enter contact name"
        />
      </Label>

      <Label htmlFor="telId">
        Number
        <Input
          id="telId"
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormField>
  );
};

export default Form;
