import axios from 'axios';

const TodoItem = (props) => {
    
    const clickHandler = () => {
        axios.delete(`/todo/${props.todo.id}`)
        .then((response) => {
            props.getToDoList();
        }).catch((error) => {
            console.error('DELETE', error)
            alert('Something went wrong removing this item');
        })
    }

    return (
            <li>{props.objective}
                <button>Completed?</button>
                <button onClick={clickHandler}>Delete</button>
            </li>
    )
}


export default TodoItem;