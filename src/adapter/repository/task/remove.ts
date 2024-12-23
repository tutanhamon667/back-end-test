import {AdapterParams} from '@/adapter/types';
import {Prisma} from '@prisma/client'
import { ITask} from '@/domain/entity/task';

type Params = Pick<AdapterParams, 'db'>

export type Remove = (where:Prisma.TaskDeleteArgs)=>Promise<ITask | never>
export const buildRemove = ({db}: Params): Remove=>{
  return async (data )=>{
    const task = await db.client.task.delete(data) as ITask
    return task
  }
}