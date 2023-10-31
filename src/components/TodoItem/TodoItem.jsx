import axios from 'axios';
import moment from 'moment';
import './TodoItem.css';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/DeleteForever';
import Done from '@mui/icons-material/Done';
import Priority from '@mui/icons-material/PriorityHigh';
import Card from '@mui/material/Card';
import Textfield from '@mui/material/TextField'

const TodoItem = (props) => {
    
    const [newDate, setNewDate] = useState();

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

    useEffect(() => {
        props.getToDoList();
    }, [newDate]);

    return (
        <> 
            <tr className={props.todo.completed ? 'complete' : (date > props.todo.deadline ? 'urgent' : 'pending')}>
                <td>{<Priority/>}{props.todo.objective}</td>
                <td>{moment(props.todo.date_added).format('llll')}</td>
                <td>{props.todo.deadline != undefined ? moment(props.todo.deadline).format('llll') : 'No deadline'}</td>
                <td><Button variant="contained" sx={{backgroundColor:'#60c6a4', "&hover": {backgroundColor: 'red'}}}className="completeButton" onClick={toggleComplete}>{<Done/>}</Button></td>
                
                <td>{props.todo.completed ? moment(props.todo.date_completed).format('llll') : (date > props.todo.deadline ? 'URGENT!' : 'Not yet!')}</td>
                
                {/* <td>{moment(props.todo.date_completed).format('llll')}</td> */}
                {/* <td>{props.todo.date_completed = undefined ? 'Complete this' :
                moment(props.todo.date_completed).format('llll')}</td> */}

                <td><Button variant="contained" sx={{backgroundColor:'red'}}onClick={clickHandler}>{<Delete/>}</Button></td>
            </tr>
        </>
    )
}


export default TodoItem;