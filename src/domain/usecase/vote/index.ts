import { UseCaseParams } from '@/domain/usecase/types';
import { buildVoteCreate, VoteCreate } from './create';
import { buildVoteRemove, VoteRemove } from './remove';


export type VoteUseCase = {
  create: VoteCreate;
  remove: VoteRemove; 
}

export const buildVoteUseCase = (params: UseCaseParams): VoteUseCase => {
  const create = buildVoteCreate(params);
  const remove = buildVoteRemove(params);
  return {
    create,
    remove
  }
}
