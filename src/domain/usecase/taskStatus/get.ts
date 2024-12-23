
import { TaskStatusUCaseGet } from '@/domain/entity/taskStatus';
import { UseCaseParams } from '../types';

export const buildTaskStatusUCaseGet = ({ adapter }: UseCaseParams): TaskStatusUCaseGet => (
  async ( data ) => {
    const taskStatus = await adapter.taskStatusRepository.get(data);
    return { taskStatus };
  }
);

