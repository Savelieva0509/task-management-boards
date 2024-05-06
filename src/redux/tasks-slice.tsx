import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TaskTypes, TasksState } from '../types';

const initialState: TasksState = {
  tasks: [
    { id: '0', text: 'Do the dishes', completed: true, deleted: false },
    { id: '1', text: 'Take out the trash', completed: true, deleted: false },
    { id: '2', text: 'Clean the house', completed: false, deleted: false },
  ],
  deletedTasks: [
    { id: '3', text: 'Organize the closet', completed: false, deleted: true },
    { id: '4', text: 'Cook a delicious meal', completed: false, deleted: true },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskTypes>) => {
        state.tasks.push(action.payload);
      },
      prepare: (text: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            deleted: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const idToDelete = action.payload;
      const deletedTaskIndex = state.tasks.findIndex(
        task => task.id === idToDelete
      );
      if (deletedTaskIndex !== -1) {
        const deletedTask = state.tasks.splice(deletedTaskIndex, 1)[0];
        deletedTask.deleted = true;
        state.deletedTasks.push(deletedTask);
      }
    },
    toggleCompleted: (state, action) => {
      const idToToggle = action.payload;
      const task = state.tasks.find(task => task.id === idToToggle);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
