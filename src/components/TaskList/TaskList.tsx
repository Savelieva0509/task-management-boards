import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { getTasksByStatus } from '../../redux/selectors';
import { TaskStatus } from '../../redux/constants';
import { TasksState } from '../../redux/tasks-slice';
import Task from '../Task/Task';
import css from './TaskList.module.scss'

const TaskList = () => {
  const todoTasks = useSelector((state: { tasks: TasksState }) =>
    getTasksByStatus(state.tasks, TaskStatus.TODO)
  );

  const inProgressTasks = useSelector(
    (state: { tasks: TasksState }) =>
      getTasksByStatus(state.tasks, TaskStatus.IN_PROGRESS)
  );

  const doneTasks = useSelector((state: { tasks: TasksState }) =>
    getTasksByStatus(state.tasks, TaskStatus.DONE)
  );

  console.log('To Do Tasks:', todoTasks);
  console.log('In Progress Tasks:', inProgressTasks);
  console.log('Done Tasks:', doneTasks);

  return (
    <div className="container">
      <Container>
        <Row>
          <Col>
            <h3>To Do</h3>
            <ul className={css.list}>
              {todoTasks.map(task => (
                <li className={css.list}>
                  <Task key={task.id} task={task} />
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <h3>In Progress</h3>
            <ul className={css.list}>
              {inProgressTasks.map(task => (
                <li className={css.list}>
                  <Task key={task.id} task={task} />
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <h3>Done</h3>
            <ul className={css.list}>
              {doneTasks.map(task => (
                <li className={css.listItem}>
                  <Task key={task.id} task={task} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TaskList;
