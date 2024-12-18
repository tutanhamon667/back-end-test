import {AdapterParams, UnknownTx} from '@/adapter/types';
import { Prisma } from '@prisma/client';
import {ITask} from '@/domain/entity/task';

type Params = Pick<AdapterParams, 'db'>

export type Create = (data: Prisma.TaskCreateArgs, tx?: UnknownTx)=>Promise<ITask | never>
export const buildCreate = ({db}: Params): Create=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).task.create(data) as ITask
  }
}
