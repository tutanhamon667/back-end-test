import { Adapter } from '../../types';
import { buildVoteCreate, VoteCreate } from './vote';
import { buildVoteRemove, VoteRemove } from './vote';

export type VoteService = {
  create: VoteCreate;
  remove: VoteRemove;
};

export const buildVoteService = (params: Adapter): VoteService => {
  const create = buildVoteCreate(params);
  const remove = buildVoteRemove(params);

  return {
    create,
    remove
  };
};
