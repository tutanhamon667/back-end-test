import { ITask } from '@/domain/entity/task';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type TaskRemove = (data: Prisma.TaskWhereUniqueInput) => Promise<{ task: ITask }>;
export const buildTaskUCaseRemove = ({ adapter }: UseCaseParams): TaskRemove => (
  async (data) => {
    const result = await adapter.taskRepository.remove({ where: data });
    return { task: result };
  }
);