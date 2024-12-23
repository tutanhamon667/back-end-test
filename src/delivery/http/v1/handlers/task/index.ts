import Express from 'express';
import { buildCreate, Create } from './create';
import { buildList, ListTask } from './list';
import { buildGet, Get } from './get';
import { buildRemove, Remove} from './remove';
import { buildUpdate, Update } from './update';
import { DeliveryParams } from '@/delivery/types';
import { createTaskRules, listTaskRules, getTaskRules, removeTaskRules, updateTaskhRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'task'>;

export type TaskMethods = {
  create: Create;
  list: ListTask;
  get: Get;
  remove: Remove;
  update: Update;
}

const buildTaskRoutes = (methods: TaskMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()

    namespace.post(
      '/list',
      listTaskRules,
      createRouteHandler(methods.list)
    )

    namespace.post(
      '/create',
      createTaskRules,
      createRouteHandler(methods.create)
    )

    namespace.get(
      '/:id',
      getTaskRules,
      createRouteHandler(methods.get)
    )

    namespace.delete(
      '/:id',
      removeTaskRules,
      createRouteHandler(methods.remove)
    )

    namespace.put(
      '/:id',
      updateTaskhRules,
      createRouteHandler(methods.update)
    )

    root.use('/task', namespace)
  }
}

/**
 * @openapi
 * /task/{id}:
 *   get:
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get a specific task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/entities/Task'
 *   delete:
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Delete a specific task.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *   put:
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/rules/updateTaskRules'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Update a specific task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/entities/Task'
 */

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
 *           description: get list of tasks.
 *           content:
 *              application/json:
 *                schema:
 *                  properties:
 *                    task:
 *                      type: array
 *                      $ref: '#/components/entities/Task'
 */


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
 *
 */

export const buildTaskHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  const list = buildList(params)
  const get = buildGet(params)
  const remove = buildRemove(params)
  const update = buildUpdate(params)


  return {
    registerRoutes: buildTaskRoutes({
      create,
      list,
      get,
      remove,
      update
    })
  };
}
