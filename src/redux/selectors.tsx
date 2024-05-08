import { DashboardsState } from '../types';
import { TaskStatus } from './constants';
import { TasksState } from './tasks-slice';

export const getDashboards = (state: DashboardsState) => state.dashboards;

export const getTasksByStatusAndDashboardId = (
  state: TasksState,
  status: TaskStatus,
  dashboardId: string
) => {
  return state[status].filter(task => task.dashboardId === dashboardId);
};
  

