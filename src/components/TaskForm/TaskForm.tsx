import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks-slice';
import Button from '../Button/Button';
import css from './TaskForm.module.scss';

const TaskForm = () => {
  const { dashboardId } = useParams<{ dashboardId: string }>();

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (dashboardId) {
      dispatch(addTask(title, text, dashboardId));
      setTitle('');
      setText('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        className={css.field}
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter task title..."
      />
      <input
        className={css.field}
        type="text"
        name="text"
        value={text}
        onChange={handleTaskChange}
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
