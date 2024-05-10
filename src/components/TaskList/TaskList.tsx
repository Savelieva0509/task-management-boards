import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { getTasksByStatusAndDashboardId } from '../../redux/selectors';
import { TaskStatus } from '../../redux/constants';
import { TasksState, moveTask } from '../../redux/tasks-slice';
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

  const tasksByStatus = {
    [TaskStatus.TODO]: todoTasks,
    [TaskStatus.IN_PROGRESS]: inProgressTasks,
    [TaskStatus.DONE]: doneTasks,
  };

  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log('Drag result:', result);
    // Проверяем, был ли объект перемещен в другое место
    if (!destination) return;

    // Проверяем, перемещается ли объект в другую колонку
    if (source.droppableId !== destination.droppableId) {
      // Обрабатываем перемещение между разными колонками
      dispatch(
        moveTask({
          id: result.draggableId,
          source: source.droppableId as TaskStatus,
          destination: destination.droppableId as TaskStatus,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row>
        {/* Оборачиваем столбцы в Droppable */}
        {Object.entries(tasksByStatus).map(([status, tasks], index) => (
          <Col key={status} md={4} className={css.column}>
            {/* Оборачиваем список задач в Droppable */}
            <Droppable droppableId={status} key={status}>
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>{status}</h3>
                  <ul className={css.list} id={status}>
                    {/* Рендерим задачи в Droppable */}
                    {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} />
                    ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Col>
        ))}
      </Row>
    </DragDropContext>
  );
};

export default TaskList;
