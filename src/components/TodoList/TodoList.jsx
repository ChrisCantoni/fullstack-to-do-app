
const TodoList = (props) => {

    return (
        <ul>
      {props.toDoList.map((todo) => {
        return <li>{todo.objective}</li>
      })}
      </ul>
    )
}

export default TodoList;