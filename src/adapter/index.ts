import { buildExampleGateway, ExampleGateway } from './gateway/example';
import { buildUserRepository, UserRepository } from './repository/user';
import { buildTaskRepository, TaskRepository } from './repository/task';
import { AdapterParams } from './types';
import { buildVoteRepository, VoteRepository } from './repository/vote';

export type Adapter = {
  userRepository: UserRepository;
  exampleGateway: ExampleGateway;
  taskRepository: TaskRepository;
  voteRepository: VoteRepository
}

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const exampleGateway = buildExampleGateway(params);
  const taskRepository = buildTaskRepository(params);
  const voteRepository = buildVoteRepository(params);
  return {
    userRepository,
    exampleGateway,
    taskRepository,
    voteRepository
  }
}
