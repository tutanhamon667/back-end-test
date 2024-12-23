
import { TaskCategoryUCaseCreate } from '@/domain/entity/taskCategory';
import { UseCaseParams } from '../types';

export const buildTaskCategoryUCaseCreate = ({ adapter }: UseCaseParams): TaskCategoryUCaseCreate => (
  async ( data ) => {
    const taskCategory = await adapter.taskCategoryRepository.create(data);
    return { taskCategory };
  }
);

