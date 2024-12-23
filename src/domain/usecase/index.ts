import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildExampleUseCase, ExampleUseCase } from './example'
import { buildTaskUseCase, TaskUseCase } from './task';
import { buildVoteUseCase, VoteUseCase } from './vote';
import { UseCaseParams } from './types';
import { buildTaskCategoryUseCase, TaskCategoryUseCase } from './taskCategory';
import { buildTaskStatusUseCase, TaskStatusUseCase } from './taskStatus';

export type UseCase = {
  auth: AuthUseCase;
  example: ExampleUseCase;
  task: TaskUseCase,
  vote: VoteUseCase,
  task_category: TaskCategoryUseCase,
  task_status: TaskStatusUseCase
}

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const example = buildExampleUseCase(params);
  const task = buildTaskUseCase(params);
  const vote = buildVoteUseCase(params);
  const task_category = buildTaskCategoryUseCase(params);
  const task_status = buildTaskStatusUseCase(params);
  return {
    auth,
    example,
    task,
    vote,
    task_category,
    task_status
  }
}
