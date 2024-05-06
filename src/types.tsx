// Тип для задачи
export interface TaskTypes {
  id: string;
  text: string;
  completed: boolean;
  deleted: boolean;
}
// Тип для состояния задач
export interface TasksState {
  tasks: TaskTypes[];
  deletedTasks: TaskTypes[];
}


// Тип для доски
export interface DashboardTypes {
  id: string;
  title: string;
}


// Тип для состояния досок
export interface DashboardsState {
  dashboards: DashboardTypes[];
}

// Тип для фильтра
export type FilterStatus = 'all' | 'completed' | 'active';

// Тип для состояния фильтра
export interface FilterState {
  status: FilterStatus;
}

// Тип для всего состояния Redux
export interface RootState {
  tasks: TasksState;
  filter: FilterState;
  dashboards: DashboardsState;
}

// Определение типа значений формы задач
export interface FormValues {
  task: string;
}

// Определение типа значений формы доски
export interface DashboardFormValues {
  dashboard: string;
}