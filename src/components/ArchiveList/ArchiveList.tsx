import { useSelector } from 'react-redux';
import { getDeletedTasks } from '.././../redux/selectors';
import tasksListCss from '../TaskList/TaskList.module.scss';
import taskCss from '../Task/Task.module.scss';

const ArchiveList = () => {
  const deletedTasks = useSelector(getDeletedTasks);

  return (
    <ul className={tasksListCss.list}>
      {deletedTasks.map(task => (
        <li className={tasksListCss.listItem} key={task.id}>
          <p className={taskCss.text}>{task.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArchiveList;
