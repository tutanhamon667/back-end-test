import { buildExampleGateway, ExampleGateway } from './gateway/example';
import { buildUserRepository, UserRepository } from './repository/user';
import { buildTaskRepository, TaskRepository } from './repository/task';
import { AdapterParams } from './types';

export type Adapter = {
  userRepository: UserRepository;
  exampleGateway: ExampleGateway;
  taskRepository: TaskRepository;
}

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const exampleGateway = buildExampleGateway(params);
  const taskRepository = buildTaskRepository(params);
  return {
    userRepository,
    exampleGateway,
    taskRepository
  }
}
