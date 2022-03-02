import { createContext, useState } from 'react';
import { useLocalStorage } from '../../hooks';
import { ITodoContext } from '../../types';


const TodoContext = createContext<ITodoContext>({} as ITodoContext);

const TodoProvider = (props: any) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo: { completed: any; }) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];


  // Change logic to be Ts complaint!
  // @ts-ignore
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo: { text: string; }) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({
      id: newTodos.length + 1,
      text,
      completed: false,
    });

    saveTodos(newTodos);
  };

  const toggleCompleteTodos = (text: string) => {
    const index = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const index = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toggleCompleteTodos,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
