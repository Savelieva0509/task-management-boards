import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TaskStatus } from './constants';
import { TaskTypes } from '../types';


export const initialTasksState: TaskTypes[] = [
  
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
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
            status: TaskStatus.TODO,
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
