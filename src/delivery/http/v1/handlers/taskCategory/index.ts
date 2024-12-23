import Express from 'express';
import { buildCreate, Create } from './create';
import { buildList, ListTaskCategory } from './list';
import { DeliveryParams } from '@/delivery/types';
import { createTaskCategoryRules, listTaskCategoryRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'task_category'>;

export type TaskCategoryMethods = {
  create: Create;
  list: ListTaskCategory;

}

const buildTaskCategoryRoutes = (methods: TaskCategoryMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()
    
    /**
     * @openapi
     * /task-category/list:
     *   post:
     *     tags: [TaskCategory]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/listTaskCategoryRules'
     *     responses:
     *        200:
     *           description: get list of task categories.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task_categories:
     *                      type: array
     *                      $ref: '#/components/entities/TaskCategory'
     */
    namespace.post(
      '/list',
      listTaskCategoryRules,
      createRouteHandler(methods.list)
    )

    /**
     * @openapi
     * /task-category/create:
     *   post:
     *     tags: [TaskCategory]
     *     produces:
     *       - application/json
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/createTaskCategoryRules'
     *     responses:
     *        200:
     *           description: Create new task category.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    task_category:
     *                      $ref: '#/components/entities/TaskCategory'

     */
    namespace.post(
      '/create',
      createTaskCategoryRules,
      createRouteHandler(methods.create)
    )

    root.use('/task-category', namespace)
  }
}

export const buildTaskCategoryHandler = (params: Params): IHandler => {
  const create = buildCreate(params)
  const list = buildList(params)


  return {
    registerRoutes: buildTaskCategoryRoutes(
      {
        create,
        list
      }
    )
  }
}

