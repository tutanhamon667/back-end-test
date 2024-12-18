import { TaskStatus } from '@prisma/client';

export interface ITaskStatus extends TaskStatus {}

/**
 * @openapi
 * components:
 *   entities:
 *      TaskStatus:
 *          required:
 *            - id
 *            - name
 *          properties: 
 *            id:
 *                type: integer
 *            name:
 *                type: string
  */
