import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { DashboardTypes, DashboardsState } from '../types';

const initialState: DashboardTypes[] = [
  { id: '0', title: 'Project 1' },
  { id: '1', title: 'Project 2' },
  { id: '2', title: 'Project 3' },
];

const dashboardsSlice = createSlice({
  name: 'dashboards',
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

export const { addDashboard, deleteDashboard } = dashboardsSlice.actions;
export const dashboardsReducer = dashboardsSlice.reducer;
