import { ITaskCategory } from '@/domain/entity/taskCategory';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';

export type CreateTaskCategory = (data: Prisma.TaskCategoryCreateArgs) => Promise<ITaskCategory | never>;

export const buildCreateTaskCategory = ({ taskCategoryRepository }: Adapter): CreateTaskCategory => {
  return async (data: Prisma.TaskCategoryCreateArgs) => {
    return await taskCategoryRepository.create(data);
  };
};

export type FilterTaskCategories = (params: FilterTaskCategoriesParams) => Promise<ITaskCategory[]>;

export type FilterTaskCategoriesParams = {
  skip?: number;
  take?: number;
  orderBy?: { [key: string]: 'asc' | 'desc' };
  where?: { [key: string]: any };
};

export const buildFilterTaskCategories = ({ taskCategoryRepository }: Adapter): FilterTaskCategories => {
  return async (params: FilterTaskCategoriesParams) => {
    const { skip, take, orderBy, where } = params;

    const taskCategories = await taskCategoryRepository.list({
      skip,
      take,
      orderBy,
      where,
    });

    return taskCategories;
  };
};

