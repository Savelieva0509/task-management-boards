import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { DashboardTypes, DashboardState } from '../types';

const initialState: DashboardTypes[] = [
  { id: '0', title: 'Do the dishes' },
  { id: '1', title: 'Take out the trash' },
  { id: '2', title: 'Clean the house' },
];

const dashboardSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addDashboard: {
      reducer: (state, action: PayloadAction<DashboardTypes>) => {
        state.push(action.payload);
      },
      prepare: (title: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
          },
        };
      },
    },
    deleteDashboard(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addDashboard, deleteDashboard } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
