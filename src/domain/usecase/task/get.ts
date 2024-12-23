import { ITask } from '@/domain/entity/task';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type TaskGet = (data: Prisma.TaskFindFirstArgs) => Promise<{ task: ITask | null }>;
export const buildTaskUCaseGet = ({ adapter }: UseCaseParams): TaskGet => {
  return async (data) => {
    const task = await adapter.taskRepository.get(data);
    return { task };
  };
};

