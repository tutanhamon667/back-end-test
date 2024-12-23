import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task_status'>
export type Create = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildCreate = ({task_status}: Params): Create=>{
  return async (req, res)=>{
    const tempTaskStatus = {
      name: req.body.name,
    }
    const newTaskStatus = await task_status.create({data:tempTaskStatus});
    
    return res.status(200).json(newTaskStatus)
  }
}
