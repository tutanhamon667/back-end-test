import { AdapterParams } from '@/adapter/types';

import { buildTaskCategoryCreate } from './create';
import { buildTaskCategoryList } from './list';
import { TaskCategoryRepository } from '@/domain/entity/taskCategory';

type Params = Pick<AdapterParams, 'db'>


export const buildTaskCategoryRepository = (params: Params): TaskCategoryRepository=>{
  const create = buildTaskCategoryCreate(params)
  const list = buildTaskCategoryList(params)
  return {
    create,
    list,
  }
}

