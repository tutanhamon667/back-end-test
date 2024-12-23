import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';
import { CreateTaskCategory, FilterTaskCategories } from './category';
export type TaskCategoryService = {
  create: CreateTaskCategory;
  list: FilterTaskCategories;
};

/**
 * Builds a TaskCategoryService that provides methods for creating, getting, and listing task categories.
 *
 * @param {Adapter} adapter - The adapter that provides the task category repository.
 * @returns {TaskCategoryService} A TaskCategoryService with methods for creating, getting, and listing task categories.
 */
export function buildTaskCategoryService(adapter: Adapter): TaskCategoryService {
  /**
   * Creates a task category.
   *
   * @param {Prisma.TaskCategoryCreateArgs} data - The task category data to create.
   * @returns {Promise<TaskCategory>} The created task category.
   */
  const create: CreateTaskCategory = async (data: Prisma.TaskCategoryCreateArgs) => {
    try {
      return await adapter.taskCategoryRepository.create(data);
    } catch (error) {
      console.error('Error creating task category:', error);
      throw new Error('Task category creation failed');
    }
  };


  const list: FilterTaskCategories = async (params: Prisma.TaskCategoryFindManyArgs) => {
    try {
      const taskCategories = await adapter.taskCategoryRepository.list(params);
      return taskCategories;
    } catch (error) {
      console.error('Error listing task categories:', error);
      throw new Error('Task category listing failed');
    }
  };
  
  return {
    create,
    list,
  };
}
