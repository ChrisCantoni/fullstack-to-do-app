import axios from 'axios';
import moment from 'moment';
import './TodoItem.css';
import {useState, useEffect} from 'react';

const TodoItem = (props) => {
    
    // const [date, setDate] = useState();

    let date = new Date();
    date = date.toISOString();
    // Implement useStates here for comparing current time with deadline and displayings result

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
        console.log('deadline', props.todo.deadline);
        console.log('date', date);
        if (date > props.todo.deadline) {
            console.log('date is greater');
        } else if (date < props.todo.deadline) {
            console.log('deadline is greater');
        }
        console.log('Completed', props.todo.objective);
        axios.put(`/todo/${props.todo.id}`)
        .then((response) => {
            props.getToDoList();
        }).catch((error) => {
            console.error('Complete button error', error);
            alert('Something went wrong completing this objective');
        })
    }

    // useEffect(() => {
    //     props.getToDoList();
    // }, []);

    return (
        <> 
            <tr className={props.todo.completed ? 'complete' : (date > props.todo.deadline ? 'urgent' : 'pending')}>
                <td>{props.todo.objective}</td>
                <td>{moment(props.todo.date_added).format('llll')}</td>
                <td>{props.todo.deadline != undefined ? moment(props.todo.deadline).format('llll') : 'No deadline'}</td>
                <td><button onClick={toggleComplete}>Completed?</button></td>
                
                <td>{props.todo.completed ? moment(props.todo.date_completed).format('llll') : (date > props.todo.deadline ? 'URGENT!' : 'Not yet!')}</td>
                
                {/* <td>{moment(props.todo.date_completed).format('llll')}</td> */}
                {/* <td>{props.todo.date_completed = undefined ? 'Complete this' :
                moment(props.todo.date_completed).format('llll')}</td> */}

                <td><button onClick={clickHandler}>Delete</button></td>
            </tr>
        </>
    )
}


export default TodoItem;