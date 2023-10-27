import {useState} from 'react';
import axios from 'axios';
import './TodoInput.css';

const TodoInput = (props) => {

    const [objective, setObjective] = useState('');
    const [deadline, setDeadline] = useState('');

    const sendTodoToServer = (event) => {
        event.preventDefault();
        {JSON.stringify(props)}
        console.log(objective);
        axios.post('/todo', {
            objective: objective,
            deadline: deadline
        }).then((response) => {
            console.log('POST /todo successful')
            setObjective('')
            props.getToDoList();
        }).catch((error) => {
            console.error('POST went bad', error);
            alert('POST went bad!');
        })
    }

    return (
        <div className='inputForm'>
            <h3>What do you need to get done?</h3>
            <form onSubmit={sendTodoToServer}>
                <div className='input'>
                To Do: <br/>
                <input style={{width: '400px'}} placeholder="Today I'm going to get it done!"
                value={objective} onChange={(e) => setObjective(e.target.value)}
                />
                </div>
                <div>
                Deadline: <br/>
                <input type='datetime-local' placeholder='Deadline' value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
                <button>Carpe Diem!</button>
                </div>
            </form>
        
        </div>
    )
}


export default TodoInput;