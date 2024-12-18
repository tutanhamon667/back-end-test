import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task'>
export type Create = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildCreate = ({task}: Params): Create=>{
  return async (req, res)=>{
    const tempTask = {
      user_id: req.user?.id,
      title: req.body.title,
      description: req.body.description,
      task_status_id: req.body.task_status_id,
      task_category_id: req.body.task_category_id
    }
    const newTask = await task.create({data:tempTask});
    
    return res.status(200).json(newTask)
  }
}
