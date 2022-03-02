import { KeyboardEvent, useContext, useState } from 'react';
import { TodoContext } from '../../contexts';
import './TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event: any) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (newTodoValue.length === 0) {
      return null;
    }
    addTodo(newTodoValue);
    // Change logic to be Ts complaint!
    // @ts-ignore
    setOpenModal(prevState => !prevState);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.charCode === 13) {
      e.preventDefault();
      addTodo(newTodoValue);
      onCancel();
    }
  };

  return (
    <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
      <label>Write a new To Do!</label>
      <textarea
        id='textarea'
        value={newTodoValue}
        onChange={onChange}
        placeholder='Write a new To Do!'
        maxLength={40}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button-cancel'
          onClick={onCancel}
        >
          Cancel
        </button>

        <button type='submit' className='TodoForm-button TodoForm-button-add'>
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
