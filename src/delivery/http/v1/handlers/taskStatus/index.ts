import Express from 'express';
import { buildCreate, Create } from './create';
import { buildList, ListTaskStatus } from './list';
import { DeliveryParams } from '@/delivery/types';
import { createTaskStatusRules, listTaskStatusRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'task_status'>;

export type TaskStatusMethods = {
  create: Create;
  list: ListTaskStatus;
}

const buildTaskStatusRoutes = (methods: TaskStatusMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()
    
    /**
     * @openapi
     * /task-status/list:
     *   post:
     *     tags: [TaskStatus]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/listTaskStatusRules'
     *     responses:
     *        200:
     *           description: get list of task statuses.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task_statuses:
     *                      type: array
     *                      $ref: '#/components/entities/TaskStatus'
     */
    namespace.post(
      '/list',
      listTaskStatusRules,
      createRouteHandler(methods.list)
    )

    /**
     * @openapi
     * /task-status/create:
     *   post:
     *     tags: [TaskStatus]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/createTaskStatusRules'
     *     responses:
     *        200:
     *           description: Create new task status.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task_status:
     *                      $ref: '#/components/entities/TaskStatus'

     */
    namespace.post(
      '/create',
      createTaskStatusRules,
      createRouteHandler(methods.create)
    )

    root.use('/task-status', namespace)
  }
}

export const buildTaskStatusHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  const list = buildList(params)

  return {
    registerRoutes: buildTaskStatusRoutes(
      {
        create,
        list
      }
    )
  }
}

