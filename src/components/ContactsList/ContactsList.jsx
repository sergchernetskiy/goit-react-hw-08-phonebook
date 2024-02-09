import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

import { ElementListContacts } from '../ElementList/ElementList';
import { List } from './ContactsList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ElementListContacts key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};
