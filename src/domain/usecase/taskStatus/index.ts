import { UseCaseParams } from '@/domain/usecase/types';
import { buildTaskStatuUCaseCreate } from './create';
import { buildTaskStatusUCaseList } from './list';
import {  TaskStatusUCaseCreate, TaskStatusUCaseGet, TaskStatusUCaseList, TaskStatusUCaseRemove, TaskStatusUCaseUpdate } from '@/domain/entity/taskStatus';
import { buildTaskStatusUCaseGet } from './get';
import { buildTaskStatusUCaseRemove } from './remove';
import { buildTaskStatusUCaseUpdate } from './update';

export type TaskStatusUseCase = {
  create: TaskStatusUCaseCreate;
  list: TaskStatusUCaseList; 
  get: TaskStatusUCaseGet;
  update: TaskStatusUCaseUpdate;
  remove: TaskStatusUCaseRemove;
}

export const buildTaskStatusUseCase = (params: UseCaseParams): TaskStatusUseCase => {
  const create = buildTaskStatuUCaseCreate(params);
  const list = buildTaskStatusUCaseList(params);
  const get = buildTaskStatusUCaseGet(params);
  const update = buildTaskStatusUCaseUpdate(params);
  const remove = buildTaskStatusUCaseRemove(params);
  return {
    create,
    list,
    get,
    update,
    remove
  }
}

