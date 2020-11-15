import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import EditToDo from './components/EditToDo';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={ToDoList}></Route>
        <Route path='/create' component={CreateToDo}></Route>
        <Route path='/edit/:id' component={EditToDo}></Route>

      </Switch>
    </div>
  );
}

export default App;
