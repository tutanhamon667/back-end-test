import { AuthUseCase, buildAuthUseCase } from './auth';
import { buildExampleUseCase, ExampleUseCase } from './example'
import { buildTaskUseCase, TaskUseCase } from './task';
import { buildVoteUseCase, VoteUseCase } from './vote';
import { UseCaseParams } from './types';

export type UseCase = {
  auth: AuthUseCase;
  example: ExampleUseCase;
  task: TaskUseCase,
  vote: VoteUseCase
}

export const buildUseCase = (params: UseCaseParams): UseCase => {
  const auth = buildAuthUseCase(params);
  const example = buildExampleUseCase(params);
  const task = buildTaskUseCase(params);
  const vote = buildVoteUseCase(params);
  return {
    auth,
    example,
    task,
    vote
  }
}
