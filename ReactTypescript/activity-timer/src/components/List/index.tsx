import { ITasks } from '../../types/task';
import style from './List.module.scss';
import Task from "./Task";

interface Props {
  tasks: ITasks[],
  selectTask: (selectedTask: ITasks) => void;
};

export default function List({ tasks, selectTask } : Props) {
  return (
      <aside className={style.ListTasks}>
          <h2>Tasks of the day</h2>
          <ul>
              {tasks.map(task => (
                <Task
                  selectTask={selectTask}
                  key={task.id}
                  {...task}
                />
              ))}
          </ul>
      </aside>
  )
}