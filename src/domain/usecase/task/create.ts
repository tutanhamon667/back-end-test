import { ITask } from '@/domain/entity/task';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type Create = ( data: Prisma.TaskCreateArgs) => Promise<{ task: ITask; }>;

export const buildCreate = ({ adapter }: UseCaseParams): Create => (
  async ( data ) => {
    const task = await adapter.taskRepository.create(data);
    return { task };
  }
);
