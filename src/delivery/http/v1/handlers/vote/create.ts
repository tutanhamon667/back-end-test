import {Response} from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';

type Params = Pick<DeliveryParams, 'vote'>
export type VoteCreate = (req: AuthRequest, res: Response)=>Promise<Response>
export const buildVoteCreate = ({vote}: Params): VoteCreate=>{
  return async (req, res)=>{
    const temp_vote = {
      user_id: req.user?.id,
      task_id: req.body.task_id
    }
    console.log(temp_vote)
    const newVote = await vote.create({data:temp_vote});

    return res.status(200).json(newVote)
  }
}
