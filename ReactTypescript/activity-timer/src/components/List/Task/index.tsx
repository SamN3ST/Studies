import style from './Task.module.scss'
import { ITasks } from '../../../types/task';


interface Props extends ITasks {
  selectTask: (selectedTask: ITasks) => void;
}

export default function Task(
  {
    description, 
    time, 
    selected, 
    completed, 
    id, 
    selectTask
  }: Props) {
  return (
      <li 
        className={`${style.task} ${selected ? style.taskSelected : ''} ${completed ? style.taskComplete : ''}`}
        onClick={() => !completed && selectTask(
          {
            description,
            time,
            selected,
            completed,
            id
          }
      )}
      >
          <h3> {description} </h3>
          <span> {time} </span>
          {completed && <span className={style.complete} aria-label='task completed'></span>}
      </li>
  )
}