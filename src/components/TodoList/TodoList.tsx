import './TodoList.css';

const TodoList = (props:any) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export default TodoList;
