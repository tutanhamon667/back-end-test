import {IVote} from '@/domain/entity/vote';
import { Adapter } from '@/domain/types';
import { Prisma } from '@prisma/client';

export type VoteCreate = (data: Prisma.VoteCreateArgs) => Promise<IVote | never>;

export const buildVoteCreate = ({voteRepository}: Adapter): VoteCreate => {
  return async (data: Prisma.VoteCreateArgs) => {
    return await voteRepository.create(data)
  }
}


export type VoteRemove = (data: Prisma.VoteDeleteArgs) => Promise<IVote | never>;

export const buildVoteRemove = ({voteRepository}: Adapter): VoteRemove => {
  return async (data: Prisma.VoteDeleteArgs) => {
    return await voteRepository.remove(data)
  }
}

