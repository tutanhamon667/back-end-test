import { Response } from 'express';

import { DeliveryParams } from '@/delivery/types';
import { AuthRequest } from '../types';
import { Prisma } from '@prisma/client';

type Params = Pick<DeliveryParams, 'task'>;
export type ListTask = (req: AuthRequest, res: Response) => Promise<Response>;

export const buildList = ({ task }: Params): ListTask => {
  return async (req, res) => {
    const where: Prisma.TaskWhereInput = {};

    if (req.body.taskStatusId) {
      where.task_status_id = req.body.taskStatusId;
    }

    if (req.body.taskCategoryId) {
      if (where.task_status_id) {
        where.AND = { task_category_id: req.body.taskCategoryId };
      } else {
        where.task_category_id = req.body.taskCategoryId;
      }
    }

    const orderBy: Prisma.TaskOrderByWithAggregationInput = {};

    if (req.body.orderBy) {
      const keys = Object.keys(req.body.orderBy);
      if (keys.length > 0) {
        Object.assign(orderBy, req.body.orderBy);
      }
    }

    const tasks = await task.list({ orderBy, where });

    return res.status(200).json(tasks);
  };
};

