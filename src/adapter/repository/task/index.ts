import { AdapterParams } from '@/adapter/types';
import { List, buildList } from './list';
import { buildCreate, Create} from './create'

type Params = Pick<AdapterParams, 'db'>

export type TaskRepository = {
  create: Create,

  list: List,
}
export const buildTaskRepository = (params: Params): TaskRepository=>{
  const create = buildCreate(params)

  const list = buildList(params)
  return {
    create,
    list,
  }
}

