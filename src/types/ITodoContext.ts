import { Todo } from '.';

export type ITodoContext = {
  todos?: Todo[];
  setTodos?: (todos: Todo[]) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  loading: boolean;
  completedTodos: number;
  totalTodos: number;
  searchedTodos: Todo[];
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  toggleCompleteTodos: (text: string) => void;
  deleteTodo: (text: string) => void;
  saveTodos?: (text: string) => void;
  addTodo: (text: string) => void;
  editTodo?: (index: number, text: string) => void;
  filter?: 'all' | 'active' | 'completed';
  setFilter?: (filter: 'all' | 'active' | 'completed') => void;
  error: boolean;
};
