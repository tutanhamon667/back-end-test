import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { Prisma } from '@prisma/client';

type Params = Pick<DeliveryParams, 'task_status'>
export type ListTaskStatus = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildList = ({task_status}: Params): ListTaskStatus=>{
  return async (req, res)=>{
    const where: Prisma.TaskStatusWhereInput = {}
    let orderBy: Prisma.TaskStatusOrderByWithAggregationInput= {}
    if (req.body.name){
      where['name'] = {contains: req.body.name}
    }
    if (req.body.orderBy){
      const keys = Object.keys(req.body.orderBy);
      if ( keys.length > 0) {
        orderBy = {[keys[0]]: req.body.orderBy[keys[0]]}
      }
    }
    
    const newTaskStatus = await task_status.list({orderBy: orderBy, where: where});
    
    return res.status(200).json(newTaskStatus)
  }
}

