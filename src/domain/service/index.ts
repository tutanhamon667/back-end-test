import { Adapter } from '../types'
import { AuthService, buildAuthService } from './auth'
import { buildExampleService, ExampleService } from './example'
import { TaskService, buildTaskService } from './tasks'
import { VoteService, buildVoteService } from './vote'
import { TaskCategoryService, buildTaskCategoryService } from './taskCategory'
import { TaskStatusService, buildTaskStatusService } from './taskStatus'

export type Service = {
  auth: AuthService
  example: ExampleService
  task: TaskService
  vote: VoteService
  taskCategory: TaskCategoryService
  taskStatus: TaskStatusService
}

export const buildService = (adapter: Adapter): Service => ({
  auth: buildAuthService(adapter),
  example: buildExampleService(adapter),
  task: buildTaskService(adapter),
  vote: buildVoteService(adapter),
  taskCategory: buildTaskCategoryService(adapter),
  taskStatus: buildTaskStatusService(adapter),
})

