import { AdapterParams } from '@/adapter/types';
import { VoteRemove, buildVoteRemove } from './remove';
import { VoteCreate, buildVoteCreate} from './create'

type Params = Pick<AdapterParams, 'db'>

export type VoteRepository = {
  create: VoteCreate,
  remove: VoteRemove
}
export const buildVoteRepository = (params: Params): VoteRepository=>{
  const create = buildVoteCreate(params)
  const remove = buildVoteRemove(params)
  return {
    create,
    remove
  }
}
