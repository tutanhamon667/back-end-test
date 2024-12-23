import { AdapterParams, UnknownTx } from '@/adapter/types'
import { ITaskCategory, TaskCategoryCreate } from '@/domain/entity/taskCategory'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>

/**
 * Creates a task category.
 *
 * @param {TaskCategoryCreateArgs} data - The data to create the task category with.
 * @param {UnknownTx} [tx] - The transaction to use.
 * @returns {Promise<ITaskCategory>} The created task category.
 */
export const buildTaskCategoryCreate = ({ db }: Params): TaskCategoryCreate => {
  return async (data: Prisma.TaskCategoryCreateArgs, tx?: UnknownTx): Promise<ITaskCategory> => {
    return await db.getContextClient(tx).taskCategory.create(data) as ITaskCategory
  }
}

