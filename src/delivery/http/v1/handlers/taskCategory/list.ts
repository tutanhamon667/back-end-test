import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { Prisma } from '@prisma/client';

type Params = Pick<DeliveryParams, 'task_category'>
export type ListTaskCategory = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildList = ({task_category}: Params): ListTaskCategory=>{
  return async (req, res)=>{
    const where: Prisma.TaskCategoryWhereInput = {}
    let orderBy: Prisma.TaskCategoryOrderByWithAggregationInput= {}
    if (req.body.name){
      where['name'] = {contains: req.body.name}
    }
    if (req.body.orderBy){
      const keys = Object.keys(req.body.orderBy);
      if ( keys.length > 0) {
        orderBy = {[keys[0]]: req.body.orderBy[keys[0]]}
      }
    }
    
    const newTaskCategory = await task_category.list({orderBy: orderBy, where: where});
    
    return res.status(200).json(newTaskCategory)
  }
}

