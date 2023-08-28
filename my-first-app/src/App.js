import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from './components/Backdrop';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Passing first prop' />
      <Todo text='Passing second prop' />
      <Todo text='Different props for different Todo' />
    </div>
  );
}

export default App;
