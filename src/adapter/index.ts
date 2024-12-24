import { buildUserRepository, UserRepository } from './repository/user';
import { buildTaskRepository, TaskRepository } from './repository/task';
import { AdapterParams } from './types';
import { buildVoteRepository, VoteRepository } from './repository/vote';
import { buildTaskCategoryRepository } from './repository/taskCategory';
import { buildTaskStatusRepository } from './repository/taskStatus';
import { TaskCategoryRepository } from '@/domain/entity/taskCategory';
import { TaskStatusRepository } from '@/domain/entity/taskStatus';

export type Adapter = {
  userRepository: UserRepository;
  taskRepository: TaskRepository;
  voteRepository: VoteRepository;
  taskCategoryRepository: TaskCategoryRepository;
  taskStatusRepository: TaskStatusRepository;
}

export const buildAdapter = (params: AdapterParams): Adapter => {
  const userRepository = buildUserRepository(params);
  const taskRepository = buildTaskRepository(params);
  const voteRepository = buildVoteRepository(params);
  const taskStatusRepository = buildTaskStatusRepository(params);
  const taskCategoryRepository = buildTaskCategoryRepository(params);
  return {
    userRepository,
    taskRepository,
    voteRepository,
    taskCategoryRepository,
    taskStatusRepository
  }
}
