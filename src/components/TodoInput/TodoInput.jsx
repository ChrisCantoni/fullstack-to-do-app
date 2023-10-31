import {useState, useEffect} from 'react';
import axios from 'axios';
import './TodoInput.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const TodoInput = (props) => {

    const [objective, setObjective] = useState('');
    const [deadline, setDeadline] = useState('');

    let date = new Date();

    const sendTodoToServer = (event) => {
        event.preventDefault();
        console.log(deadline);
        console.log(objective);
        if (deadline == '') {
            setDeadline(undefined);
        }
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
                <TextField variant="outlined" size="small" style={{width: '400px'}} placeholder="Today I'm going to get it done!"
                value={objective} onChange={(e) => setObjective(e.target.value)}
                />
                </div>
                <div>
                Deadline: <br/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker defaultValue={dayjs(date)} slotProps={{ textField: { size: 'small' } }} value={deadline} onChange={setDeadline}/>
                </LocalizationProvider>
                </div>
                <div><br/>
                {/* <input type='datetime-local' placeholder='Deadline' value={deadline} onChange={(e) => setDeadline(e.target.value)}/> */}
                <Button type="submit" variant="contained" size="large" endIcon={<SendIcon/>}>Carpe Diem</Button>
                </div>
            </form>
        
        </div>
    )
}


export default TodoInput;