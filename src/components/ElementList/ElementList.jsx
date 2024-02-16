import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AiOutlineRest } from 'react-icons/ai';

import { deleteContact } from '../../redux/contacts/operations';
import { selectError } from '../../redux/contacts/selectors';
import { Button, Text, Circle, ElementList } from './ElementList.styled';
import { notifyWarn } from 'components/Notification/Notification';

export const ElementListContacts = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));

    if (error) {
      notifyWarn(`Name ${name} has been not removed`);
      return;
    }

    notifyWarn(`${name} has been removed successfully`);
  };

  return (
    <ElementList>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        <AiOutlineRest />
      </Button>
    </ElementList>
  );
};
