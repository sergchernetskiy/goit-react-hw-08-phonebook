import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChangeFilter}
        placeholder="Search contact"
      />
    </Label>
  );
};
