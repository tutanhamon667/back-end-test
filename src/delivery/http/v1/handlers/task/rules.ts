import { check, header } from 'express-validator'
import { authRequired, validateSchema } from '../../middlewares'

/**
  * @openapi
  * components:
  *   rules:
  *      createTaskRules:
  *          required:
  *             - user_id
  *             - title
  *             - description
  *             - task_status_id
  *             - task_category_id
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             title:
  *                type: string
  *             description:
  *                type: string
  *             task_status_id:
  *                type: integer
  *             task_category_id:
  *                type: integer
  * 
  */
export const createTaskRules = [
  check('title').exists().notEmpty().isString(),
  check('description').exists().notEmpty().isString(),
  check('task_status_id').exists().notEmpty().isInt(),
  check('task_category_id').exists().notEmpty().isInt(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      updateTaskhRules:
  *          required:
  *             - id
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             id:
  *                type: string
  *                format: uuid
  *             title:
  *                type: string
  *             description:
  *                type: string
  *             task_status_id:
  *                type: integer
  *             task_category_id:
  *                type: integer
  */
export const updateTaskhRules = [
  check('id').exists().notEmpty().isUUID(),
  check('title').exists().isString(),
  check('description').exists().isString(),
  check('task_status_id').exists().isInt(),
  check('task_category_id').exists().isInt(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];


/**
  * @openapi
  * components:
  *   rules:
  *      listTaskRules:
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             skip:
  *                type: integer
  *             take:
  *                type: integer
  *             orderBy:
  *                type: object
  *                properties:
  *                   task_status_id:
  *                      type: string
  *                      default: asc
  *                   task_category_id:
  *                      type: string
  *                      default: asc
  *                   vote_count:
  *                      type: string
  *                      default: asc
  *             where:
  *                type: object
  *                properties:
  *                   task_status_id:
  *                      type: integer
  *                   task_category_id:
  *                      type: integer
  * 
  */
export const listTaskRules = [
  check('orderBy').isObject(),
  check('skip').isNumeric(),
  check('take').isNumeric(),
  check('where').isObject(),
  validateSchema
];


export const getTaskRules = [
  check('id').exists().notEmpty().isUUID(),
  validateSchema
];

/**
  * @openapi
  * components:
  *   rules:
  *      removeTaskRules:
  *          required:
  *             - id
  *          headers:
  *             authorization:
  *                type: string
  *          properties:
  *             id:
  *                type: string
  *                format: uuid
  */
export const removeTaskRules = [
  check('id').exists().notEmpty().isUUID(),
  header('authorization').exists().notEmpty().isString(),
  authRequired({}),
  validateSchema
];

