import {  TaskStatusUCaseCreate } from '@/domain/entity/taskStatus';
import { UseCaseParams } from '../types';

export const buildTaskStatuUCaseCreate = ({ adapter }: UseCaseParams): TaskStatusUCaseCreate => (
  async ( data ) => {
    const taskStatus = await adapter.taskStatusRepository.create(data);
    return { taskStatus };
  }
);

