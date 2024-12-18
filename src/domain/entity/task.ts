import { Task } from '@prisma/client';

export interface ITask extends Task {}


/**
 * @openapi
 * components:
 *   entities:
 *      Task:
 *          required:
 *            - id
 *            - user_id
 *            - title
 *            - description
 *            - task_status_id
 *            - task_category_id
 *          properties: 
 *            id:
 *                type: string
 *                format: uuid
 *            user_id:
 *                type: string
 *                format: uuid
 *            title:
 *                type: string
 *            description:
 *                type: string
 *            task_status_id:
 *                type: integer
 *            task_category_id:
 *                type: integer
 *                reference: TaskCategory
 *            updated_at:
 *                type: string
 *                format: date
 *            created_at:
 *                type: string
 *                format: date
 */
