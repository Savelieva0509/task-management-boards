// Тип для состояния задач
export interface TaskTypes {
  id: string;
  dashboardId: string;
  title: string;
  text: string;
  status: string;
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

// Определение типа значений формы задач
export interface FormValues {
  title: string;
  text: string;
}

// Определение типа значений формы доски
export interface DashboardFormValues {
  dashboard: string;
}

// Определение типа значений формы поиска
export interface SearchFormValues {
  dashboardId: string;
}
