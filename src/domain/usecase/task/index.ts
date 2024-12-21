import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreate, Create } from './create';
import { buildList, ListTask } from './list';


export type TaskUseCase = {
  create: Create;
  list: ListTask; 
}

export const buildTaskUseCase = (params: UseCaseParams): TaskUseCase => {
  const create = buildCreate(params);
  const list = buildList(params);
  return {
    create,
    list
  }
}
