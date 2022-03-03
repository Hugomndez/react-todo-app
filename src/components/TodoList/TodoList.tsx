import { useContext } from 'react';
import { TodoContext } from '../../contexts';
import './TodoList.css';

const TodoList = (props:any) => {
  const {
    loading,
  } = useContext(TodoContext);
  return (
    <section>
      <ul className={`${loading ? 'center' : ''}`}>{props.children}</ul>
    </section>
  );
};

export default TodoList;
