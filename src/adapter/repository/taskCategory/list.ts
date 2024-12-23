import { AdapterParams } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { ITaskCategory } from '@/domain/entity/taskCategory';

type Params = Pick<AdapterParams, 'db'>;

/**
 * Builds a TaskCategoryList function for listing task categories.
 *
 * @param {Params} params - The database parameter.
 * @returns {(getParams: Prisma.TaskCategoryFindManyArgs) => Promise<ITaskCategory[]>} A function that lists task categories.
 */
export const buildTaskCategoryList = ({ db }: Params): (getParams: Prisma.TaskCategoryFindManyArgs) => Promise<ITaskCategory[]> => {
  return async (getParams: Prisma.TaskCategoryFindManyArgs): Promise<ITaskCategory[]> => {
    const taskCategories = await db.client.taskCategory.findMany(getParams) as Array<ITaskCategory>;
    return taskCategories;
  };
};

