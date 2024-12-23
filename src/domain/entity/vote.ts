import { Vote } from '@prisma/client';

export interface IVote extends Vote {}


/**
 * @openapi
 * components:
 *   entities:
 *      Vote:
 *          required:
 *            - user_id
 *            - task_id
 *          properties: 
 *            id:
 *                type: string
 *                format: uuid
 *            user_id:
 *                type: string
 *                format: uuid
 *            task_id:
 *                type: string
 *                format: uuid
 */
