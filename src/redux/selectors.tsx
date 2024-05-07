import { RootState, DashboardsState, TasksState} from '../types';
import { TaskStatus } from './constants';
import { TaskColumnsState } from './task-columns-slice';

export const getTasks = (state: TasksState) => state.tasks;

export const getDashboards = (state: DashboardsState) => state.dashboards;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;

export const getFilter = (state: RootState) => state.filter.status;

export const getTasksByStatus = (
  state: TaskColumnsState,
  status: TaskStatus
) => {
  return state[status];
};