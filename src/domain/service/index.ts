import { Adapter } from '../types'
import { AuthService, buildAuthService } from './auth';
import { buildExampleService, ExampleService } from './example'
import { TaskService, buildTaskService } from './tasks'

export type Service = {
  auth: AuthService;
  example: ExampleService;  
  task: TaskService;
}

export const buildService = (params: Adapter): Service => {
  const auth = buildAuthService(params); 
  const example = buildExampleService(params);
  const task = buildTaskService(params);
  
  return {
    auth,
    example,
    task
  }
}
  
