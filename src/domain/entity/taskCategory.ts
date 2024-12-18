import { TaskCategory } from '@prisma/client';

export interface ITaskCategory extends TaskCategory {}


/**
 * @openapi
 * components:
 *   entities:
 *      TaskCategory:
 *          required:
 *            - id
 *            - name
 *          properties: 
 *            id:
 *                type: integer
 *            name:
 *                type: string
  */
