import { ITaskStatus } from '@/domain/entity/taskStatus';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type Update = (data: Prisma.TaskStatusCreateArgs,
) => Promise<{ taskStatus: ITaskStatus; }>;

export const buildTaskStatusUCaseUpdate = ({ adapter }: UseCaseParams): Update => (
  async ( data) => {
    const taskStatus = await adapter.taskStatusRepository.update(data);
    return { taskStatus };
  }
);

