import { IState } from "../config"


export const selectTasksById = (state: IState) => {
  return state.tasksById;
}

export const selectTasks = (state: IState): any => {
  const tasksById = selectTasksById(state);
  if (!tasksById) return []
  return Object.values(tasksById)
}
