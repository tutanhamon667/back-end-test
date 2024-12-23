import { check, header } from 'express-validator';
import { authRequired, validateSchema } from '../../middlewares';

/**
  * @openapi
  * components:
  *   rules:
  *      createTaskCategoryRules:
  *          required:
  *             - name
  *          headers:
  *             authorization:
  *                type: string
  *                 
  *          properties:
  *             name:
  *                type: string
  */
export const createTaskCategoryRules = [
  check('name').exists().notEmpty().isString(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({required:true}),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      updateTaskCategoryRules:
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
export const updateTaskCategoryRules = [
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
  *      listTaskCategoryRules:
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             skip:
  *                type: integer
  *             take:
  *                type: integer
  */
export const listTaskCategoryRules = [
  check('skip').isNumeric(),
  check('take').isNumeric(),
  validateSchema
];

export const getTaskCategoryRules = [
  check('id').exists().notEmpty().isUUID(),
  validateSchema
];

