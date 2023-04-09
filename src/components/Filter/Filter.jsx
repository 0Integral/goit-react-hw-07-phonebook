import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filterSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterList(value));
  };

  return (
    <FilterLabel>
      Find contact by name
      <FilterInput type="text" name="filter" onChange={handleFilter} />
    </FilterLabel>
  );
};
