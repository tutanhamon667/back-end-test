import { UnknownTx } from '@/adapter/types';
import { Prisma, TaskCategory } from '@prisma/client';

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
export type TaskCategoryRepository = {
  create: TaskCategoryCreate;
  list: TaskCategoryList;
};
export type TaskCategoryCreate = (data: Prisma.TaskCategoryCreateArgs, tx?: UnknownTx)=>Promise<ITaskCategory | never>

export type TaskCategoryList = (params:Prisma.TaskCategoryFindManyArgs)=>Promise<Array<ITaskCategory> | never>

export type TaskCategoryUCaseCreate = ( data: Prisma.TaskCategoryCreateArgs) => Promise<{ taskCategory: ITaskCategory; }>;
export type TaskCategoryUCaseList = ( data: Prisma.TaskCategoryFindManyArgs) => Promise<{ taskCategory: ITaskCategory[]; }>;
