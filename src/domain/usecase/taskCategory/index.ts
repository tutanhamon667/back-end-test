import { UseCaseParams } from '@/domain/usecase/types';
import { buildTaskCategoryUCaseCreate } from './create';
import { buildTaskCategoryUCaseList } from './list';
import { TaskCategoryUCaseCreate, TaskCategoryUCaseList } from '@/domain/entity/taskCategory';

export type TaskCategoryUseCase = {
  create: TaskCategoryUCaseCreate;
  list: TaskCategoryUCaseList;
}

export const buildTaskCategoryUseCase = (params: UseCaseParams): TaskCategoryUseCase => {
  const create = buildTaskCategoryUCaseCreate(params);
  const list = buildTaskCategoryUCaseList(params);
  return {
    create,
    list
  }
}