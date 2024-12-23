import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'task'>
export type Remove = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildRemove = ({task}: Params): Remove=>{
  return async (req, res)=>{
    const id = req.params.id;
    const deletedTask = await task.remove({id});
    
    return res.status(200).json(deletedTask)
  }
}