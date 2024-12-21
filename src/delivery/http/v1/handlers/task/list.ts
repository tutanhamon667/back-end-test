import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { Prisma } from '@prisma/client';

type Params = Pick<DeliveryParams, 'task'>
export type ListTask = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildList = ({task}: Params): ListTask=>{
  return async (req, res)=>{
    const where: Prisma.TaskWhereInput = {}
    let orderBy: Prisma.TaskOrderByWithAggregationInput= {}
    if (req.body.task_status_id){
      where['task_status_id'] = req.body.task_status_id
    }
    if (req.body.task_category_id){
      if(where['task_status_id']){
        where['AND'] = {}; where['AND']['task_category_id'] = req.body.task_category_id;
      } else {
        where['task_category_id'] = req.body.task_category_id
      }
    }
    if (req.body.orderBy){
      const keys = Object.keys(req.body.orderBy);
      if ( keys.length > 0) {
        orderBy = {[keys[0]]: req.body.orderBy[keys[0]]}
      }
    }
    
    const newTask = await task.list({orderBy: orderBy, where: where});
    
    return res.status(200).json(newTask)
  }
}
