import {ITask} from '@/domain/entity/task';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';

export type CreateTask = (data: Prisma.TaskCreateArgs) => Promise<ITask | never>;

export const buildCreateTask = ({taskRepository}: Adapter): CreateTask => {
  return async (data: Prisma.TaskCreateArgs) => {
    return await taskRepository.create(data)
  }
}
