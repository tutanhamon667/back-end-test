import Express from 'express';
import { buildCreate, Create } from './create';

import { DeliveryParams } from '@/delivery/types';
import { createTaskRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'task'>;

export type TaskMethods = {
  create: Create;

}

const buildCreateRoutes = (methods: TaskMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()

    /**
     * @openapi
     * /task/create:
     *   post:
     *     tags: [Task]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/createTaskRules'
     *     responses:
     *        200:
     *           description: Create new task.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task:
     *                      $ref: '#/components/entities/Task'

     */
    namespace.post(
      '/create',
      createTaskRules,
      createRouteHandler(methods.create)
    )

    root.use('/task', namespace)
  }
}

export const buildCreateHandler = (params: Params): IHandler => {
  const create = buildCreate(params)


  return {
    registerRoutes: buildCreateRoutes(
      {
        create
      }
    )
  }
}
