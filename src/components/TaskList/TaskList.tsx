import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getTasksByStatusAndDashboardId } from '../../redux/selectors';
import { TaskStatus } from '../../redux/constants';
import { TasksState } from '../../redux/tasks-slice';
import Task from '../Task/Task';
import css from './TaskList.module.scss';

const TaskList = () => {
  const params = useParams<{ dashboardId?: string }>();
  const dashboardId = params.dashboardId;
  const todoTasks = useSelector((state: { tasks: TasksState }) =>
    dashboardId
      ? getTasksByStatusAndDashboardId(
          state.tasks,
          TaskStatus.TODO,
          dashboardId
        )
      : []
  );

  const inProgressTasks = useSelector((state: { tasks: TasksState }) =>
    dashboardId
      ? getTasksByStatusAndDashboardId(
          state.tasks,
          TaskStatus.IN_PROGRESS,
          dashboardId
        )
      : []
  );

  const doneTasks = useSelector((state: { tasks: TasksState }) =>
    dashboardId
      ? getTasksByStatusAndDashboardId(
          state.tasks,
          TaskStatus.DONE,
          dashboardId
        )
      : []
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
                <li className={css.list} key={task.id}>
                  <Task task={task} />
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <h3>In Progress</h3>
            <ul className={css.list}>
              {inProgressTasks.map(task => (
                <li className={css.list} key={task.id}>
                  <Task task={task} />
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <h3>Done</h3>
            <ul className={css.list}>
              {doneTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                  <Task task={task} />
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
