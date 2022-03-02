import { ImCheckboxChecked } from 'react-icons/im';
import { MdDeleteForever } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = (props:any) => {
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${
          props.completed ? 'Icon-check--active' : ''
        }`}
        onClick={props.onComplete}
      >
        <ImCheckboxChecked />
      </span>
      <p
        className={`TodoItem-p ${
          props.completed ? 'TodoItem-p--complete' : ' '
        }`}
      >
        {props.text}
      </p>
      <span className='Icon Icon-delete' onClick={props.onDelete}>
        <MdDeleteForever />
      </span>
    </li>
  );
};

export default TodoItem;
