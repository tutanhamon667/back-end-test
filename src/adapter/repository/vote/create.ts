import {AdapterParams, UnknownTx} from '@/adapter/types';
import { Prisma } from '@prisma/client';
import {IVote} from '@/domain/entity/vote';

type Params = Pick<AdapterParams, 'db'>

export type VoteCreate = (data:Prisma.VoteCreateArgs, tx?: UnknownTx)=>Promise<IVote | never>
export const buildVoteCreate = ({db}: Params): VoteCreate=>{
  return async (data, tx)=>{
    return await db.getContextClient(tx).vote.create(data) as IVote
  }
}
