import { UnknownTx } from '@/adapter/types';
import { Prisma, TaskStatus } from '@prisma/client';

/**
 * Interface extending Prisma's TaskStatus model.
 */
export interface ITaskStatus extends TaskStatus {
  id: number;
  name: string;
}

/**
 * @openapi
 * components:
 *   entities:
 *      TaskStatus:
 *          required:
 *            - id
 *            - name
 *          properties: 
 *            id:
 *                type: integer
 *            name:
 *                type: string
 */

/**
 * Repository interface for task status operations.
 */
export type TaskStatusRepository = {
  create: TaskStatusCreate;
  list: TaskStatusList;
};

/**
 * Type for creating a task status.
 *
 * @param {Prisma.TaskStatusCreateArgs} data - The data to create the task status with.
 * @param {UnknownTx} [tx] - Optional transaction.
 * @returns {Promise<ITaskStatus>} The created task status or throws an error.
 */
export type TaskStatusCreate = (data: Prisma.TaskStatusCreateArgs, tx?: UnknownTx) => Promise<ITaskStatus | never>;

/**
 * Type for listing task statuses.
 *
 * @param {Prisma.TaskStatusFindManyArgs} params - The parameters for finding task statuses.
 * @returns {Promise<ITaskStatus[]>} The list of task statuses or throws an error.
 */
export type TaskStatusList = (params: Prisma.TaskStatusFindManyArgs) => Promise<Array<ITaskStatus> | never>;

/**
 * Type for getting a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for getting a task status.
 * @returns {Promise<ITaskStatus | null>} The task status or null if not found.
 */
export type TaskStatusGet = (where: Prisma.TaskStatusWhereUniqueInput) => Promise<ITaskStatus | null>;

/**
 * Type for removing a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for removing a task status.
 * @param {UnknownTx} [tx] - Optional transaction.
 * @returns {Promise<ITaskStatus>} The removed task status or throws an error.
 */
export type TaskStatusRemove = (where: Prisma.TaskStatusWhereUniqueInput, tx?: UnknownTx) => Promise<ITaskStatus | never>;

/**
 * Type for updating a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for updating a task status.
 * @param {Prisma.TaskStatusUpdateInput} data - The data to update the task status with.
 * @param {UnknownTx} [tx] - Optional transaction.
 * @returns {Promise<ITaskStatus>} The updated task status or throws an error.
 */
export type TaskStatusUpdate = (data: Prisma.TaskStatusCreateArgs, tx?: UnknownTx) => Promise<ITaskStatus | never>;

/**
 * Use case type for creating a task status.
 *
 * @param {Prisma.TaskStatusCreateArgs} data - The data to create the task status with.
 * @returns {Promise<{ taskStatus: ITaskStatus }>} An object containing the created task status.
 */
export type TaskStatusUCaseCreate = (data: Prisma.TaskStatusCreateArgs) => Promise<{ taskStatus: ITaskStatus }>;

/**
 * Use case type for listing task statuses.
 *
 * @param {Prisma.TaskStatusFindManyArgs} data - The parameters for finding task statuses.
 * @returns {Promise<{ taskStatus: ITaskStatus[] }>} An object containing the list of task statuses.
 */
export type TaskStatusUCaseList = (data: Prisma.TaskStatusFindManyArgs) => Promise<{ taskStatus: ITaskStatus[] }>;

/**
 * Use case type for getting a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for getting a task status.
 * @returns {Promise<{ taskStatus: ITaskStatus | null }>} An object containing the task status or null if not found.
 */
export type TaskStatusUCaseGet = (where: Prisma.TaskStatusWhereUniqueInput) => Promise<{ taskStatus: ITaskStatus | null }>;

/**
 * Use case type for removing a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for removing a task status.
 * @returns {Promise<{ taskStatus: ITaskStatus }>} An object containing the removed task status.
 */
export type TaskStatusUCaseRemove = (where: Prisma.TaskStatusWhereUniqueInput) => Promise<{ taskStatus: ITaskStatus }>;

/**
 * Use case type for updating a task status.
 *
 * @param {Prisma.TaskStatusWhereUniqueInput} where - The parameters for updating a task status.
 * @param {Prisma.TaskStatusUpdateInput} data - The data to update the task status with.
 * @returns {Promise<{ taskStatus: ITaskStatus }>} An object containing the updated task status.
 */
export type TaskStatusUCaseUpdate = ( data: Prisma.TaskStatusCreateArgs) => Promise<{ taskStatus: ITaskStatus }>;

