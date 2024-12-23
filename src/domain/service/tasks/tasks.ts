import { CreateTask, FilterTasks, FilterTasksParams, GetTask, RemoveTask, UpdateTask } from '@/domain/entity/task';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const buildCreateTask = ({ taskRepository }: Adapter): CreateTask => {
  return async (data: Prisma.TaskCreateArgs) => {
    return await taskRepository.create(data);
  };
};

export const buildGetTask = ({ taskRepository }: Adapter): GetTask => {
  return async (id: string) => {
    const findArgs: Prisma.TaskFindFirstArgs<DefaultArgs> = {
      where: { id: { equals: id } }
    };
    return await taskRepository.get(findArgs);
  };
};

export const buildUpdateTask = ({ taskRepository }: Adapter): UpdateTask => {
  return async (id: string, data: Prisma.TaskUpdateArgs['data']) => {
    return await taskRepository.update(data,  { id:  id});
  };
};

export const buildRemoveTask = ({ taskRepository }: Adapter): RemoveTask => {
  return async (id: string) => {
    const deleteArgs: Prisma.TaskDeleteArgs = {
      where: { id:  id }
    };
    return await taskRepository.remove(deleteArgs);
  };
};


export const buildFilterTasks = ({ taskRepository }: Adapter): FilterTasks => {
  return async (params: FilterTasksParams) => {
    const { skip, take, orderBy, where } = params;

    return await taskRepository.list({ skip, take, orderBy, where });
  };
};

