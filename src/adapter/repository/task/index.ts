import { AdapterParams } from '@/adapter/types';
import { List, buildList } from './list';
import { buildCreate, Create} from './create'
import { buildGet, Get} from './get'
import { buildRemove, Remove } from './remove'
import { buildUpdate, Update} from './update'

type Params = Pick<AdapterParams, 'db'>

export type TaskRepository = {
  create: Create,
  get: Get,
  list: List,
  remove: Remove,
  update: Update,
}
export const buildTaskRepository = (params: Params): TaskRepository=>{
  const create = buildCreate(params)
  const get = buildGet(params)
  const list = buildList(params)
  const remove = buildRemove(params)
  const update = buildUpdate(params)
  return {
    create,
    get,
    list,
    remove,
    update,
  }
}

