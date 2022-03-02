import { useContext } from 'react';
import { TodoContext } from '../../contexts';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal)
  };


  return (
    <button
      type="button"
      className={`CreateTodoButton ${openModal ? 'close' : ''}`}
      onClick={onClickButton}
    >
      +
    </button>
  );
};

export default CreateTodoButton;
