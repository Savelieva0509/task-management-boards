import { DashboardsState, TasksState } from '../types';

export const getDashboards = (state: { dashboards: DashboardsState }) =>
  state.dashboards.dashboards;

export const getLastDashboardId = (state: { dashboards: DashboardsState }) => {
  const dashboards = state.dashboards.dashboards;

  if (dashboards.length > 0) {
    return dashboards[dashboards.length - 1]._id;
  } else {
    return '';
  }
};

export const getTasks = (state: { tasks: TasksState }) => state.tasks.tasks;

export const getTasksLoading = (state: { tasks: TasksState }) => state.tasks.loading;

export const getDashboardsLoading = (state: { dashboards: DashboardsState }) =>
  state.dashboards.loading;
  
export const getAddingDashboard = (state: { dashboards: DashboardsState }) =>
  state.dashboards.addingDashboard;
