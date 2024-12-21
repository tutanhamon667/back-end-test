import {AdapterParams} from '@/adapter/types';
import {Prisma} from '@prisma/client'
import { IUserAuth} from '@/domain/entity/user';

type Params = Pick<AdapterParams, 'db'>

export type Get = (params:Prisma.UserFindFirstArgs)=>Promise<IUserAuth | null | never>
export const buildGet = ({db}: Params): Get =>{
  return async (getParams )=>{
    const user = await db.client.user.findFirst(getParams) as IUserAuth | null

    return user
  }
}
