import { AdapterParams } from '@/adapter/types';
import { List, buildList } from './list';
import { buildCreate, Create} from './create'
import { buildGet, Get} from './get'

type Params = Pick<AdapterParams, 'db'>

export type TaskRepository = {
  create: Create,
  get: Get,
  list: List,
}
export const buildTaskRepository = (params: Params): TaskRepository=>{
  const create = buildCreate(params)
  const get = buildGet(params)
  const list = buildList(params)
  return {
    create,
    get,
    list,
  }
}
