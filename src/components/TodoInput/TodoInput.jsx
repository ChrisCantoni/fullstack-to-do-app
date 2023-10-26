import {useState} from 'react';
import axios from 'axios';

const TodoInput = (props) => {

    const [objective, setObjective] = useState('')
    const sendTodoToServer = (event) => {
        event.preventDefault();
        {JSON.stringify(props)}
        console.log(objective);
        axios.post('/todo', {
            objective: objective
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
        <>
            <h3>What do you need to get done?</h3>
            <form onSubmit={sendTodoToServer}>
                <input placeholder="Today I'm going to get it done!"
                value={objective} onChange={(e) => setObjective(e.target.value)}
                />
                <button>Carpe Diem!</button>
            </form>
        
        </>
    )
}


export default TodoInput;