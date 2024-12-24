import { Adapter } from '@/adapter';

export const buildTestAdapter = (): Adapter => ({
  taskRepository: {
    create: jest.fn(),
    list: jest.fn(),
  },
  userRepository: {
    count: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(),
    list: jest.fn(),
    update: jest.fn(),
  },
  voteRepository: {
    create: jest.fn(),
    remove: jest.fn(),
  },
  taskCategoryRepository: {
    create: jest.fn(),
    list: jest.fn(),
  },
  taskStatusRepository: {
    create: jest.fn(),
    list: jest.fn(),
  },
});
