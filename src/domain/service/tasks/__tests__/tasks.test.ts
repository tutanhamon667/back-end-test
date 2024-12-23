import { Adapter } from '@/domain/types';
import {
  buildCreateTask,
  buildGetTask,
  buildUpdateTask,
  buildRemoveTask,
  buildFilterTasks,
} from '../tasks';
import { Prisma } from '@prisma/client';

describe('Tasks Service', () => {
  const taskRepository = {
    create: jest.fn(),
    get: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    list: jest.fn(),
  };

  const buildAdapter = () => ({
    taskRepository,
    userRepository: {}, // Add this property
    exampleGateway: {}, // Add this property
    voteRepository: {}, // Add this property
    taskCategoryRepository: {}, // Add this property
    taskStatusRepository: {}, // Add this property
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('buildCreateTask', () => {
    it('creates a task', async () => {
      const createTask = buildCreateTask(buildAdapter());
      const taskData: Prisma.TaskCreateArgs = {
        data: {
          user_id: '01550709-138a-4004-b4ab-329fc46eae6c',
          title: 'Test Task',
          description: 'Test Description',
          task_category_id: 1,
          task_status_id: 1,
        },
      };

      taskRepository.create.mockResolvedValue({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskData.data,
      });

      const result = await createTask(taskData);

      expect(taskRepository.create).toHaveBeenCalledWith(taskData);
      expect(result).toEqual({ id: '1', ...taskData.data });
    });
  });

  describe('buildGetTask', () => {
    it('gets a task by id', async () => {
      const getTask = buildGetTask(buildAdapter());
      const taskId = '1';
      const task = {
        id: taskId,
        title: 'Test Task',
        description: 'Test Description',
      };

      taskRepository.get.mockResolvedValue(task);

      const result = await getTask(taskId);

      expect(taskRepository.get).toHaveBeenCalledWith({
        where: { id: { equals: taskId } },
      });
      expect(result).toEqual(task);
    });
  });

  describe('buildUpdateTask', () => {
    it('updates a task', async () => {
      const updateTask = buildUpdateTask(buildAdapter());
      const taskId = '1';
      const updateData: Prisma.TaskUpdateArgs['data'] = {
        title: 'Updated Task',
      };
      const updatedTask = { id: taskId, ...updateData };

      taskRepository.update.mockResolvedValue(updatedTask);

      const result = await updateTask(taskId, updateData);

      expect(taskRepository.update).toHaveBeenCalledWith(
        updateData,
        { id: taskId }
      );
      expect(result).toEqual(updatedTask);
    });
  });

  describe('buildRemoveTask', () => {
    it('removes a task', async () => {
      const removeTask = buildRemoveTask(buildAdapter());
      const taskId = '1';
      const removedTask = { id: taskId, title: 'Removed Task' };

      taskRepository.remove.mockResolvedValue(removedTask);

      const result = await removeTask(taskId);

      expect(taskRepository.remove).toHaveBeenCalledWith({
        where: { id: taskId },
      });
      expect(result).toEqual(removedTask);
    });
  });

  describe('buildFilterTasks', () => {
    it('filters tasks', async () => {
      const filterTasks = buildFilterTasks(buildAdapter());
      const filterParams = {
        skip: 0,
        take: 10,
        orderBy: { vote_count: 'desc' },
        where: { title: 'Test' },
      };
      const tasks = [
        { id: '1', title: 'Test Task 1' },
        { id: '2', title: 'Test Task 2' },
      ];

      taskRepository.list.mockResolvedValue(tasks);

      const result = await filterTasks(filterParams);

      expect(taskRepository.list).toHaveBeenCalledWith(filterParams);
      expect(result).toEqual(tasks);
    });
  });
});

