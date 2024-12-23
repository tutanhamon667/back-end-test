import { AdapterParams } from '@/adapter/types';
import { Prisma } from '@prisma/client';
import { ITask } from '@/domain/entity/task';

type Params = Pick<AdapterParams, 'db'>

export type Update = (data: Prisma.TaskUpdateInput, where: Prisma.TaskWhereUniqueInput) => Promise<ITask | never>
export const buildUpdate = ({db}: Params): Update=>{
  return async (data, where )=>{
    const task = await db.client.task.update({data, where}) as ITask
    return task
  }
}
