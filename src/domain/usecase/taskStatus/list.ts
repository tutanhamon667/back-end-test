
import { TaskStatusUCaseList } from '@/domain/entity/taskStatus';
import { UseCaseParams } from '../types';

export const buildTaskStatusUCaseList = ({ adapter }: UseCaseParams): TaskStatusUCaseList => (
  async ( data ) => {
    const taskStatus = await adapter.taskStatusRepository.list(data);
    return { taskStatus };
  }
);

