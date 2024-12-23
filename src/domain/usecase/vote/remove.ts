import { IVote } from '@/domain/entity/vote';
import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';

export type VoteRemove = ( data: Prisma.VoteDeleteArgs) => Promise<{ vote: IVote; }>;

export const buildVoteRemove = ({ adapter }: UseCaseParams): VoteRemove => (
  async ( data ) => {
    const result = await adapter.voteRepository.remove(data);
    return { vote: result };
  }
);
