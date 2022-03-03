import { useContext } from 'react';
import { TodoContext } from '../contexts';
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  Modal,
  TodoForm,
  TaskError,
  EmptyTask,
  TaskLoader,
} from '../components';

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList >
        {error && <TaskError />}
        {loading && new Array(3).fill(1).map((a, i) => <TaskLoader key={i} />)}
        {!loading && !searchedTodos.length && <EmptyTask />}

        {!loading && searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </>
  );
};

export { AppUI };
