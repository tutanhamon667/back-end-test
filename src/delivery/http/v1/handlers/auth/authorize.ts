import { Request, Response } from 'express';
import { DeliveryParams } from '@/delivery/types';

type Params = Pick<DeliveryParams, 'auth'>

export type Authorize = (req: Request, res: Response)=>Promise<Response>

export const buildAuthorize = ({auth}: Params): Authorize=>{
  return async (req, res)=>{

    const data = await auth.authorize({
      email: req.body.email?.toLowerCase(),
      password: req.body.password,
    });
    res.header('Authorization', `Bearer ${data.accessToken}`)
    return res.status(200).json(data)
  }
}
