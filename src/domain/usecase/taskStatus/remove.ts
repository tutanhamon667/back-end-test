import { ITaskStatus } from '@/domain/entity/taskStatus';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type TaskStatusRemove = (data: Prisma.TaskStatusWhereUniqueInput) => Promise<{ taskStatus: ITaskStatus }>;
export const buildTaskStatusUCaseRemove = ({ adapter }: UseCaseParams): TaskStatusRemove => (
  async (data) => {
    const result = await adapter.taskStatusRepository.remove(data);
    return { taskStatus: result };
  }
);

