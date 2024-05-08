import {  DashboardsState } from '../types';
import { TaskStatus } from './constants';
import { TasksState } from './tasks-slice';

export const getDashboards = (state: DashboardsState) => state.dashboards;



export const getTasksByStatus = (state: TasksState, status: TaskStatus) => {
  console.log('Tasks State:', state);
  console.log('Requested Status:', status);
  if (state && state[status]) {
    console.log('Tasks Found:', state[status]);
    return state[status];
  } else {
    console.log('No Tasks Found');
    return []; // Возвращаем пустой массив или другое значение по умолчанию
  }
};
