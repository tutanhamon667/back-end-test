
import { TaskCategoryUCaseList } from '@/domain/entity/taskCategory';
import { UseCaseParams } from '../types';

export const buildTaskCategoryUCaseList = ({ adapter }: UseCaseParams): TaskCategoryUCaseList => (
  async ( data ) => {
    const taskCategory = await adapter.taskCategoryRepository.list(data);
    return { taskCategory };
  }
);