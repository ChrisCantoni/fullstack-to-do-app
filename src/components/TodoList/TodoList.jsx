import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import Done from '@mui/icons-material/Done';

const TodoList = (props) => {

    
    

    return (
        <table className="todoList">
            <thead>
                <tr>
                <th>To Do</th>
                <th>Date Added</th>
                <th>Deadline</th>
                <th>{<Done/>}</th>
                <th>Date Completed</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {props.toDoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo}
            getToDoList={props.getToDoList}/> 
            })}
            </tbody>
        </table>
    )
}

export default TodoList;