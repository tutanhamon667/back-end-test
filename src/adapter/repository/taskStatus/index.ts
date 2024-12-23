import { AdapterParams } from '@/adapter/types';

import { buildTaskStatusCreate } from './create';
import { buildTaskStatusList } from './list';
import { TaskStatusRepository } from '@/domain/entity/taskStatus';

type Params = Pick<AdapterParams, 'db'>


export const buildTaskStatusRepository = (params: Params): TaskStatusRepository=>{
  const create = buildTaskStatusCreate(params)
  const list = buildTaskStatusList(params)
  return {
    create,
    list,
  }
}
