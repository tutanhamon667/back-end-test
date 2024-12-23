import { Adapter } from '../../types';
import { buildCreateTask, CreateTask } from './tasks';

export type TaskService = {
  create: CreateTask;
  
};

export const buildTaskService = (params: Adapter): TaskService => {
  const create = buildCreateTask(params);
  return {
    create
  };
};
