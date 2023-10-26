import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoInput from '../TodoInput/TodoInput';

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
    <div>
      <h1>TO DO APP</h1>
      <TodoInput getToDoList={getToDoList}/>
      <ul>
      {toDoList.map((todo) => {
        return <li>{todo.objective}</li>
      })}
      </ul>
    </div>
  );

}

export default App
