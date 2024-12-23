import { ITask } from '@/domain/entity/task';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type TaskUpdate = (data: Prisma.TaskUpdateArgs) => Promise<ITask>;

export const buildTaskUCaseUpdate = ({ adapter }: UseCaseParams): TaskUpdate => async (data) => {
  const task = await adapter.taskRepository.update(data.data, data.where);
  return task;
};

