import {AdapterParams} from '@/adapter/types';
import {Prisma} from '@prisma/client'
import { ITask} from '@/domain/entity/task';

type Params = Pick<AdapterParams, 'db'>

export type Get = (params: Prisma.TaskFindFirstArgs )=>Promise<ITask | null>

export const buildGet = ({db}: Params): Get =>{
  return async (getParams )=>{
    const task = await db.client.task.findFirst(getParams) as ITask
    return task
  }
}
