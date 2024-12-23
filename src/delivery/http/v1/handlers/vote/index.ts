import Express from 'express';
import { buildVoteCreate, VoteCreate } from './create';
import { buildVoteRemove, VoteRemove } from './remove';
import { DeliveryParams } from '@/delivery/types';
import { createVoteRules, removeVoteRules } from './rules';
import { createRouteHandler } from '../../routeHandler';
import { IHandler } from '../types';

type Params = Pick<DeliveryParams, 'vote'>;

export type VoteMethods = {
  create: VoteCreate;
  remove: VoteRemove

}

const buildVoteRoutes = (methods: VoteMethods) => {
  return (root: Express.Router) => {
    const namespace = Express.Router()
    
    /**
     * @openapi
     * /vote/remove:
     *   post:
     *     tags: [Vote]
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: Authorization
     *       in: header
     *       required: true
     *       type: string
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/removeVoteRules'
     *     responses:
     *        200:
     *           description: Remove vote.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    vote:
     *                      $ref: '#/components/entities/Vote'
     */
    namespace.post(
      '/remove',
      removeVoteRules,
      createRouteHandler(methods.remove)
    )

    /**
     * @openapi
     * /vote/create:
     *   post:
     *     tags: [Vote]
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: Authorization
     *       in: header
     *       required: true
     *       type: string
     *     requestBody:
     *       in: body
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/rules/createVoteRules'
     *     responses:
     *        200:
     *           description: Create new vote.
     *           content:
     *              application/json:
     *                schema:
     *                  properties:
     *                    vote:
     *                      $ref: '#/components/entities/Vote'

     */
    namespace.post(
      '/create',
      createVoteRules,
      createRouteHandler(methods.create)
    )

    root.use('/vote', namespace)
  }
}

export const buildVoteHandler = (params: Params): IHandler => {
  const create = buildVoteCreate(params)
  const remove = buildVoteRemove(params)


  return {
    registerRoutes: buildVoteRoutes(
      {
        create,
        remove
      }
    )
  }
}
