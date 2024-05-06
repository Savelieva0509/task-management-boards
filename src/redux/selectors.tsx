import { RootState, DashboardsState } from '../types';

export const getTasks = (state: RootState) => state.tasks.tasks;
export const getDashboards = (state: DashboardsState) => state.dashboards;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;

export const getFilter = (state: RootState) => state.filter.status;
