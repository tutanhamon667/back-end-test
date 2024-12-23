import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreate, Create } from './create';
import { buildList, ListTask } from './list';
import { buildTaskUCaseGet, TaskGet } from './get';
import { buildTaskUCaseUpdate, TaskUpdate } from './update';
import { buildTaskUCaseRemove, TaskRemove } from './remove';

export interface TaskUseCase {
  create: Create;
  list: ListTask;
  get: TaskGet;
  update: TaskUpdate;
  remove: TaskRemove;
}

export const buildTaskUseCase = (params: UseCaseParams): TaskUseCase => {
  return {
    create: buildCreate(params),
    list: buildList(params),
    get: buildTaskUCaseGet(params),
    update: buildTaskUCaseUpdate(params),
    remove: buildTaskUCaseRemove(params),
  };
}

