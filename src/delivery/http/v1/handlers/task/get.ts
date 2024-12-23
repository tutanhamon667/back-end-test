import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task'>
export type Get = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildGet = ({task}: Params): Get=>{
  return async (req, res)=>{
    const id = req.params.id;
    const foundTask = await task.get({where:{id}});
    
    if (!foundTask) {
      return res.status(404).json({error: 'Task not found'})
    }

    return res.status(200).json(foundTask)
  }
}
