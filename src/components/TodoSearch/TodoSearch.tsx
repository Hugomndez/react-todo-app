import { useContext } from 'react';
import { TodoContext } from '../../contexts';
import './TodoSearch.css';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='Search...'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export default TodoSearch;
