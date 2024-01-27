import React, { useState } from "react";
import style from './Form.module.scss';
import Button from '../Button';
import { ITasks } from "../../types/task";
import { v4 as uuid4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

export default function Form ({ setTasks}: Props ) {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("00:00");

  function saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks => [
        ...oldTasks, 
        {
          description,
          time,
          selected: false,
          completed: false,
          id: uuid4()
        }
      ]);

    setDescription("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={saveTask}>
        <div className={style.inputContainer}>
            <label htmlFor="task">Add a new task</label>
            <input 
                type="text" 
                name="task" 
                id="task"
                value={description} 
                onChange={event => setDescription(event.target.value)}  
                placeholder="What task do you want to do?" 
                required
            />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="time">Time</label>
            <input 
                type="time" 
                name="time"
                step="1" 
                id="time" 
                value={time} 
                onChange={event => setTime(event.target.value)} 
                min="00:00:00" 
                max="23:59:59" 
                required
            />
        </div>
      <Button type="submit"> To add </Button>
    </form>
  )
}