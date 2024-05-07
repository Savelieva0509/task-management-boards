import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.scss';
import { deleteTask } from '../../redux/tasks-slice';
import { TaskTypes } from '../../types';

type TaskProps = {
  task: TaskTypes;
};

const Task = ({ task }: TaskProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  
  return (
    <div className={css.wrapper}>
      <p className={css.title}>{task.title}</p>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
