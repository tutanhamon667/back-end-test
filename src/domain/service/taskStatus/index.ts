import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';
import { CreateTaskStatus, FilterTaskStatuses } from './status';
export type TaskStatusService = {
  create: CreateTaskStatus;

  list: FilterTaskStatuses;
};

/**
 * Builds a TaskStatusService that provides methods for creating, getting, and listing task statuses.
 *
 * @param {Adapter} adapter - The adapter that provides the task status repository.
 * @returns {TaskStatusService} A TaskStatusService with methods for creating, getting, and listing task statuses.
 */
export function buildTaskStatusService(adapter: Adapter): TaskStatusService {
  /**
   * Creates a task status.
   *
   * @param {Prisma.TaskStatusCreateArgs} data - The task status data to create.
   * @returns {Promise<ITaskStatus>} The created task status.
   */
  const create: CreateTaskStatus = async (data: Prisma.TaskStatusCreateArgs) => {
    try {
      return await adapter.taskStatusRepository.create(data);
    } catch (error) {
      console.error('Error creating task status:', error);
      throw new Error('Task status creation failed');
    }
  };


  const list: FilterTaskStatuses = async (params: Prisma.TaskStatusFindManyArgs) => {
    try {
      const taskStatuses = await adapter.taskStatusRepository.list(params);
      return taskStatuses;
    } catch (error) {
      console.error('Error listing task statuses:', error);
      throw new Error('Task status listing failed');
    }
  };
  
  return {
    create,
    list,
  };
}

