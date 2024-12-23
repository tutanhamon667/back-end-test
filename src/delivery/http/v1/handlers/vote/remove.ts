import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'vote'>
export type VoteRemove = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildVoteRemove = ({vote}: Params): VoteRemove=>{
  return async (req, res)=>{

    const result = await vote.remove({where:{id: req.user?.id}});

    return res.status(200).json(result)
  }
}
