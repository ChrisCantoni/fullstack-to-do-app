import axios from 'axios';
import moment from 'moment';
import './TodoItem.css';

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
        let date = new Date();
        console.log(props.todo.deadline);
        let completeDate = date.toLocaleTimeString(); // Date down to the minute slice(0, 21)
        console.log('Completed', props.todo.objective);
        axios.put(`/todo/${props.todo.id}`)
        .then((response) => {
            props.getToDoList();
        }).catch((error) => {
            console.error('Complete button error', error);
            alert('Something went wrong completing this objective');
        })
    }

    return (
        <>
            <tr className={props.todo.completed ? 'complete' : 'pending'}>
                <td>{props.todo.objective}</td>
                <td>{moment(props.todo.date_added).format('llll')}</td>
                <td>{props.todo.deadline != undefined ? moment(props.todo.deadline).format('llll') : 'No deadline'}</td>
                
                <td><button onClick={toggleComplete}>Completed?</button></td>
                
                <td>{props.todo.date_completed != undefined ? moment(props.todo.date_completed).format('llll') : 'Not yet!'}</td>

                {/* <td>{moment(props.todo.date_completed).format('llll')}</td> */}
                {/* <td>{props.todo.date_completed = undefined ? 'Complete this' :
                moment(props.todo.date_completed).format('llll')}</td> */}

                <td><button onClick={clickHandler}>Delete</button></td>
            </tr>
        </>
    )
}


export default TodoItem;