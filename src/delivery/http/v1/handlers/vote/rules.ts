import { check, header } from 'express-validator'
import { authRequired, validateSchema } from '../../middlewares'

/**
  * @openapi
  * components:
  *   rules:
  *      createVoteRules:
  *          required:
  *             - task_id
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             task_id:
  *                type: string
  *                format: uuid
  */
export const createVoteRules = [
  header('authorization').exists().notEmpty().isString(),
  check('task_id').exists().notEmpty().isUUID(),
  authRequired({}),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      removeVoteRules:
  *         required:
  *            - id
  *         headers:
  *           authorization:
  *             type: string
  *         properties:
  *           id:
  *             type: string
  *             format: uuid
  */
export const removeVoteRules  = [
  check('id').exists().notEmpty().isUUID(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];
