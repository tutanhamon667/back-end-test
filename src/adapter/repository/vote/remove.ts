import {AdapterParams, UnknownTx} from '@/adapter/types';
import { Prisma } from '@prisma/client';
import {IVote} from '@/domain/entity/vote';

type Params = Pick<AdapterParams, 'db'>

export type VoteRemove = (data:Prisma.VoteDeleteArgs, tx?: UnknownTx)=>Promise<IVote | never>
export const buildVoteRemove = ({db}: Params): VoteRemove=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).vote.delete(data) as IVote
  }
}
