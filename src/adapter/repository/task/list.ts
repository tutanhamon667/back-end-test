import {AdapterParams} from '@/adapter/types';
import {Prisma} from '@prisma/client'
import { ITask} from '@/domain/entity/task';

type Params = Pick<AdapterParams, 'db'>

export type List = (params:Prisma.TaskFindManyArgs)=>Promise<Array<ITask> | never>
export const buildList = ({db}: Params): List=>{
  return async (getParams )=>{
    const user = await db.client.task.findMany(getParams) as Array<ITask>
    return user
  }
}
