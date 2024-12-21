import { ITask } from '@/domain/entity/task';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type ListTask = ( data: Prisma.TaskFindManyArgs) => Promise<{ task: ITask[]; }>;

export const buildList = ({ adapter }: UseCaseParams): ListTask => (
  async ( data ) => {
    const task = await adapter.taskRepository.list(data);
    return { task };
  }
);
