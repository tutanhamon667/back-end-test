import { CreateTask, FilterTasks } from '@/domain/entity/task';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';

export const buildCreateTask = ({ taskRepository }: Adapter): CreateTask => {
  return async (data: Prisma.TaskCreateArgs) => {
    return await taskRepository.create(data);
  };
};


export const buildFilterTasks = ({ taskRepository }: Adapter): FilterTasks => {
  return async (params: Prisma.TaskFindManyArgs) => {
    const { skip, take, orderBy, where } = params;

    return await taskRepository.list({ skip, take, orderBy, where });
  };
};

