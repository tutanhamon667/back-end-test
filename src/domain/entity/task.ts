import { Prisma, Task } from '@prisma/client';

export interface ITask extends Task {
  id: string;
  user_id: string;
  title: string;
  description: string;
  task_status_id: number;
  task_category_id: number;
  updated_at: Date;
  created_at: Date;
}


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


export type CreateTask = (data: Prisma.TaskCreateArgs) => Promise<ITask>;
export type TaskGet = (id: string) => Promise<ITask | null>;

export type TaskUpdate = (id: string, data: Prisma.TaskUpdateInput) => Promise<ITask>;

export type TaskRemove = (id: string) => Promise<ITask>;

export type FilterTasks = (params: Prisma.TaskFindManyArgs) => Promise<ITask[]>;

