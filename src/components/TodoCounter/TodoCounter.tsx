import { useContext } from 'react';
import { TodoContext } from '../../contexts';
import './TodoCounter.css';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>
      You have completed {completedTodos} of {totalTodos} To Do's
    </h2>
  );
};

export default TodoCounter;
