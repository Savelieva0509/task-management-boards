export enum TaskStatus {
  TODO = 'to-do',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export const statusFilters = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});