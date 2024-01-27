import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import { ITasks } from '../types/task';

export default function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks(oldTask => oldTask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id,
    })));
  }

  function endTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTask => oldTask.map(task => {
        if (task.id === selected.id) {
          return { 
            ...task,
            selected:false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
          tasks={tasks}
          selectTask={selectTask}
      />
      <Timer
        selected={selected}
        endTask={endTask}
      />
    </div>
  );
} 
