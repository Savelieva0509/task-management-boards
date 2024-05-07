import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasks} from '.././../redux/selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { statusFilters } from '.././../redux/constants';
// import { TasksState, FilterStatus } from '../../types';
import css from './TaskList.module.scss';


const TaskList = () => {
  const tasks = useSelector(getTasks);
  

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
