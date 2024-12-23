import { UseCaseParams } from '../types';
import { Prisma } from '@prisma/client';
import { IVote } from '@/domain/entity/vote';

export type VoteCreate = ( data: Prisma.VoteCreateArgs) => Promise<{ vote: IVote; }>;

export const buildVoteCreate = ({ adapter }: UseCaseParams): VoteCreate => (
  async ( data ) => {
    const vote = await adapter.voteRepository.create(data);
    return {  vote };
  }
);
