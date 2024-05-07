import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TaskTypes, TasksState } from '../types';

const initialState: TaskTypes[] = [
  {
    id: '0',
    dashboardId: '1',
    title: 'Add structure of the project',
    text: 'Сreate a project structure in accordance with company standards and requirements ',
    toDo: true,
    inProcess: true,
    done: false,
  },
  {
    id: '1',
    dashboardId: '1',
    title: 'Implement authentication system',
    text: 'Implement authentication system using JWT for secure access to the application',
    toDo: false,
    inProcess: true,
    done: false,
  },
  {
    id: '2',
    dashboardId: '1',
    title: 'Design user interface',
    text: 'Design user-friendly interface with modern design principles and responsive layout',
    toDo: false,
    inProcess: false,
    done: true,
  },
  {
    id: '3',
    dashboardId: '1',
    title: 'Integrate backend with frontend',
    text: 'Integrate backend APIs with frontend components to enable data exchange between them',
    toDo: true,
    inProcess: false,
    done: false,
  },
  {
    id: '4',
    dashboardId: '1',
    title: 'Write unit tests',
    text: 'Write comprehensive unit tests to ensure the reliability and stability of the application',
    toDo: true,
    inProcess: true,
    done: false,
  },
  {
    id: '5',
    dashboardId: '1',
    title: 'Deploy application to production',
    text: 'Deploy the application to production server using Docker and Kubernetes for scalability',
    toDo: false,
    inProcess: true,
    done: false,
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskTypes>) => {
        state.push(action.payload);
      },
      prepare: (title: string, text: string) => {
        return {
          payload: {
            dashboardId: '1',
            id: nanoid(),
            title,
            text,
            toDo: true,
            inProcess: false,
            done: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    editTask(state, action: PayloadAction<{ id: string; title: string; text:string }>) {
      const { id, title,text } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.title = title;
        task.text = text;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
