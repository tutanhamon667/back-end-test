import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task_category'>
export type Create = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildCreate = ({task_category}: Params): Create=>{
  return async (req, res)=>{
    const tempTaskCategory = {
      name: req.body.name,
    }
    const newTaskCategory = await task_category.create({data:tempTaskCategory});
    
    return res.status(200).json(newTaskCategory)
  }
}

