import { AdapterParams, UnknownTx } from '@/adapter/types'
import { ITaskStatus,  TaskStatusCreate } from '@/domain/entity/taskStatus'
import { Prisma } from '@prisma/client'

type Params = Pick<AdapterParams, 'db'>


/**
 * Creates a task status.
 *
 * @param {TaskStatusCreateArgs} data - The data to create the task status with.
 * @param {UnknownTx} [tx] - The transaction to use.
 * @returns {Promise<ITaskStatus>} The created task status.
 */
export const buildTaskStatusCreate = ({ db }: Params): TaskStatusCreate => {
  return async (data: Prisma.TaskStatusCreateArgs, tx?: UnknownTx): Promise<ITaskStatus> => {
    return await db.getContextClient(tx).taskStatus.create(data) as ITaskStatus
  }
}

