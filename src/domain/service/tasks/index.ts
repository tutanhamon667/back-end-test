import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';
import { CreateTask,  FilterTasks } from '@/domain/entity/task';
export type TaskService = {
  create: CreateTask;
  list: FilterTasks;
};

/**
 * Builds a TaskService that provides methods for creating, getting, and listing tasks.
 *
 * @param {Adapter} adapter - The adapter that provides the task repository.
 * @returns {TaskService} A TaskService with methods for creating, getting, and listing tasks.
 */
export function buildTaskService(adapter: Adapter): TaskService {
  /**
   * Creates a task.
   *
   * @param {Prisma.TaskCreateArgs} data - The task data to create.
   * @returns {Promise<ITask>} The created task.
   */
  const create: CreateTask = async (data: Prisma.TaskCreateArgs) => {
    try {
      return await adapter.taskRepository.create(data);
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('Task creation failed');
    }
  };

  const list: FilterTasks = async (params: Prisma.TaskFindManyArgs) => {
    try {
      const tasks = await adapter.taskRepository.list(params);
      return tasks;
    } catch (error) {
      console.error('Error listing tasks:', error);
      throw new Error('Task listing failed');
    }
  };
  
  return {
    create,

    list,
  };
}
