import { TodoProvider } from '../contexts';
import { AppUI } from './AppUI';

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;
