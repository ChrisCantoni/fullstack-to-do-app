import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {

    
    

    return (
        <ul>
            {props.toDoList.map((todo) => {
            return <TodoItem key={todo.id} 
            objective={todo.objective} todo={todo}
            getToDoList={props.getToDoList}/> 
            })}
        </ul>
    )
}

export default TodoList;