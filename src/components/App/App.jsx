import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import Container from '@mui/material/Container';
import './App.css';

function App () {
  const [toDoList, setToDoList] = useState([]);

  const getToDoList = () => {
    axios.get('/todo').then((response) => {
      console.log(response.data);
      setToDoList(response.data);
    }).catch((error) => {
      console.log('GET /todo local error', error);
      alert('Something went wrong fetching your list');
    })
  }

useEffect(() => {
  getToDoList();
}, []);

  return (
    <Container>
      <h1>TO DO APP</h1>
      <TodoInput getToDoList={getToDoList}/>
      <TodoList className="todoList" toDoList={toDoList} getToDoList={getToDoList}/>
    </Container>
  );

}

export default App
