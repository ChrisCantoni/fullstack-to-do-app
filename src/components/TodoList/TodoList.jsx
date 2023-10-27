import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {

    
    

    return (
        <table>
            <thead>
                <tr>
                <th>To Do</th>
                <th>Date Added</th>
                <th>Deadline</th>
                <th>Completed?</th>
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