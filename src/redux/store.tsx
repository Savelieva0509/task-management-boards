import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks-slice';
import { filterReducer } from './filter-slice';
import { dashboardsReducer } from './dashboards-slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    dashboards: dashboardsReducer,
  },
});
