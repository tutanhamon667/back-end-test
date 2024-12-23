import {ITaskStatus} from '@/domain/entity/taskStatus';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';

export type CreateTaskStatus = (data: Prisma.TaskStatusCreateArgs) => Promise<ITaskStatus | never>;

export const buildCreateTaskStatus = ({taskStatusRepository}: Adapter): CreateTaskStatus => {
  return async (data: Prisma.TaskStatusCreateArgs) => {
    return await taskStatusRepository.create(data)
  }
}

export type FilterTaskStatuses = (params: FilterTaskStatusesParams) => Promise<ITaskStatus[]>;

export type FilterTaskStatusesParams = {
  skip?: number;
  take?: number;
  orderBy?: { [key: string]: 'asc' | 'desc' };
  where?: { [key: string]: any };
};

export const buildFilterTaskStatuses = ({ taskStatusRepository }: Adapter): FilterTaskStatuses => {
  return async (params: FilterTaskStatusesParams) => {
    const { skip, take, orderBy, where } = params;

    const taskStatuses = await taskStatusRepository.list({
      skip,
      take,
      orderBy,
      where,
    });

    return taskStatuses;
  };
};
