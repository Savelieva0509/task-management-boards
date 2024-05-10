import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TaskStatus } from './constants';
import { TaskTypes } from '../types';

export interface TasksState {
  [TaskStatus.TODO]: TaskTypes[];
  [TaskStatus.IN_PROGRESS]: TaskTypes[];
  [TaskStatus.DONE]: TaskTypes[];
}

const initialState: TasksState = {
  [TaskStatus.TODO]: [
    {
      id: '111',
      dashboardId: '13',
      title: 'Add structure of the project',
      text: 'Сreate a project structure in accordance with company standards and requirements ',
      status: TaskStatus.TODO,
    },
    {
      id: '222',
      dashboardId: '13',
      title: 'Implement authentication system',
      text: 'Implement authentication system using JWT for secure access to the application',
      status: TaskStatus.TODO,
    },
  ],
  [TaskStatus.IN_PROGRESS]: [
    {
      id: '333',
      dashboardId: '13',
      title: 'Integrate backend with frontend',
      text: 'Integrate backend APIs with frontend components to enable data exchange between them',
      status: TaskStatus.IN_PROGRESS,
    },

    {
      id: '444',
      dashboardId: '13',
      title: 'Deploy application to production',
      text: 'Deploy the application to production server using Docker and Kubernetes for scalability',
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: '555',
      dashboardId: '13',
      title: 'Design user interface',
      text: 'Design user-friendly interface with modern design principles and responsive layout',
      status: TaskStatus.IN_PROGRESS,
    },
  ],
  [TaskStatus.DONE]: [
    {
      id: '666',
      dashboardId: '13',
      title: 'Write unit tests',
      text: 'Write comprehensive unit tests to ensure the reliability and stability of the application',
      status: TaskStatus.DONE,
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskTypes>) => {
        state[TaskStatus.TODO].push(action.payload);
      },
      prepare: (title: string, text: string, dashboardId: string) => {
        return {
          payload: {
            dashboardId,
            id: nanoid(),
            title,
            text,
            status: TaskStatus.TODO,
          },
        };
      },
    },
    deleteTask(
      state,
      action: PayloadAction<{
        id: string;
        status: TaskStatus;
      }>
    ) {
      const { id, status } = action.payload;
      const index = state[status].findIndex(task => task.id === id);
      state[status].splice(index, 1);
    },
    editTask(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        text: string;
        status: TaskStatus;
      }>
    ) {
      const { id, title, text, status } = action.payload;
      const task = state[status].find(task => task.id === id);
      if (task) {
        task.title = title;
        task.text = text;
      }
    },
    moveTask(
      state,
      action: PayloadAction<{
        id: string;
        source: TaskStatus;
        destination: TaskStatus;
      }>
    ) {
      const { id, source, destination } = action.payload;
      const taskToMove = state[source].find(task => task.id === id);

      if (!taskToMove) {
        console.error(`Task with id ${id} not found in source ${source}`);
        return;
      }

      const updatedSource = state[source].filter(task => task.id !== id);

      const updatedDestination = [...state[destination], taskToMove];

      return {
        ...state,
        [source]: updatedSource,
        [destination]: updatedDestination,
      };
    },
  },
});

export const { moveTask, addTask, deleteTask, editTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
