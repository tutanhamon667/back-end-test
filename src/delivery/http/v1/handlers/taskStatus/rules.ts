import { check, header } from 'express-validator';
import { authRequired, validateSchema } from '../../middlewares';

/**
  * @openapi
  * components:
  *   rules:
  *      createTaskStatusRules:
  *          required:
  *             - name
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             name:
  *                type: string
  */
export const createTaskStatusRules = [
  check('name').exists().notEmpty().isString(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      updateTaskStatusRules:
  *          required:
  *             - id
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             id:
  *                type: string
  *                format: uuid
  *             name:
  *                type: string
  */
export const updateTaskStatusRules = [
  check('id').exists().notEmpty().isUUID(),
  check('name').optional().isString(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      listTaskStatusRules:
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             skip:
  *                type: integer
  *             take:
  *                type: integer
  */
export const listTaskStatusRules = [
  check('skip').isNumeric(),
  check('take').isNumeric(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

export const getTaskStatusRules = [
  check('id').exists().notEmpty().isUUID(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];
