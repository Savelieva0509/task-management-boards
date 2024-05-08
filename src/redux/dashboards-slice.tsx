import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { DashboardTypes} from '../types';

const initialState: DashboardTypes[] = [
  { id: '10', title: 'Project 1' },
  { id: '12', title: 'Project 2' },
  { id: '13', title: 'Project 3' },
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
      const index = state.findIndex(
        dashboard => dashboard.id === action.payload
      );
      state.splice(index, 1);
    },
    editDashboard(state, action: PayloadAction<{ id: string; title: string }>) {
      const { id, title } = action.payload;
      const dashboard = state.find(dashboard => dashboard.id === id);
      if (dashboard) {
        dashboard.title = title;
      }
    },
  },
});

export const { addDashboard, deleteDashboard, editDashboard } = dashboardsSlice.actions;
export const dashboardsReducer = dashboardsSlice.reducer;
