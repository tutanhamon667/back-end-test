import Express from 'express';
import { buildCreate, Create } from './create';
import { buildList, ListTask } from './list';
import { DeliveryParams } from '@/delivery/types';
import { createTaskRules, listTaskRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'task'>;

export type TaskMethods = {
  create: Create;
  list: ListTask

}

const buildTaskRoutes = (methods: TaskMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()
    
    /**
     * @openapi
     * /task/list:
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
     *             $ref: '#/components/rules/listTaskRules'
     *     responses:
     *        200:
     *           description: Create new task.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task:
     *                      type: array
     *                      $ref: '#/components/entities/Task'
     */
    namespace.post(
      '/list',
      listTaskRules,
      createRouteHandler(methods.list)
    )

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

export const buildTaskHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  const list = buildList(params)


  return {
    registerRoutes: buildTaskRoutes(
      {
        create,
        list
      }
    )
  }
}
