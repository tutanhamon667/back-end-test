import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task'>
export type Update = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildUpdate = ({task}: Params): Update=>{
  return async (req, res)=>{
    const tempTask = {
      title: req.body.title,
      description: req.body.description,
      task_status_id: req.body.task_status_id,
      task_category_id: req.body.task_category_id
    }
    const updatedTask = await task.update({
      where: {id: req.params.id},
      data: tempTask
    });
    
    return res.status(200).json(updatedTask)
  }
}

