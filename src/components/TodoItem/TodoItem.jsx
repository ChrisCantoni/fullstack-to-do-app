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

    const toggleComplete = () => {
        console.log('Completed', props.objective);
        axios.put(`/todo/${props.todo.id}`)
        .then((response) => {
            props.getToDoList();
        }).catch((error) => {
            console.error('Complete button error', error);
            alert('Something went wrong completing this objective');
        })
    }

    return (
            <li>{props.objective}
                <button onClick={toggleComplete}>Completed?</button>
                <button onClick={clickHandler}>Delete</button>
            </li>
    )
}


export default TodoItem;