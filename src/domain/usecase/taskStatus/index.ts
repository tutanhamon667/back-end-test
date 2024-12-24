import { UseCaseParams } from '@/domain/usecase/types';
import { buildTaskStatuUCaseCreate } from './create';
import { buildTaskStatusUCaseList } from './list';
import {  TaskStatusUCaseCreate, TaskStatusUCaseList } from '@/domain/entity/taskStatus';

export type TaskStatusUseCase = {
  create: TaskStatusUCaseCreate;
  list: TaskStatusUCaseList; 
}

export const buildTaskStatusUseCase = (params: UseCaseParams): TaskStatusUseCase => {
  const create = buildTaskStatuUCaseCreate(params);
  const list = buildTaskStatusUCaseList(params);

  return {
    create,
    list,

  }
}

