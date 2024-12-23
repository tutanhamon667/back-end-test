import { AdapterParams } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { ITaskStatus } from '@/domain/entity/taskStatus';

type Params = Pick<AdapterParams, 'db'>;

/**
 * Builds a TaskStatusList function for listing task statuses.
 *
 * @param {Params} params - The database parameter.
 * @returns {(getParams: Prisma.TaskStatusFindManyArgs) => Promise<ITaskStatus[]>} A function that lists task statuses.
 */
export const buildTaskStatusList = ({ db }: Params): (getParams: Prisma.TaskStatusFindManyArgs) => Promise<ITaskStatus[]> => {
  return async (getParams: Prisma.TaskStatusFindManyArgs): Promise<ITaskStatus[]> => {
    const taskStatuses = await db.client.taskStatus.findMany(getParams) as Array<ITaskStatus>;
    return taskStatuses;
  };
};

