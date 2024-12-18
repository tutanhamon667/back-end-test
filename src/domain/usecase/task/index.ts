import { UseCaseParams } from '@/domain/usecase/types';
import { buildCreate, Create } from './create';


export type TaskUseCase = {
  create: Create;
}

export const buildTaskUseCase = (params: UseCaseParams): TaskUseCase => {
  const create = buildCreate(params);
  return {
    create
  }
}
