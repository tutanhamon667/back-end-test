import { Adapter } from '@/domain/types';
import {
  buildCreateTask,
  buildGetTask,
  buildUpdateTask,
  buildRemoveTask,
  buildFilterTasks,
} from '../tasks';
import { Prisma } from '@prisma/client';
import { buildTestAdapter } from '../../../../utils/tests';

describe('Tasks Service', () => {
  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('buildCreateTask', () => {
    it('creates a task', async () => {
      const createTask = buildCreateTask(testAdapter);
      const taskData: Prisma.TaskCreateArgs = {
        data: {
          user_id: '01550709-138a-4004-b4ab-329fc46eae6c',
          title: 'Test Task',
          description: 'Test Description',
          task_category_id: 1,
          task_status_id: 1,
        },
      };

      (testAdapter.taskRepository.create as jest.Mock).mockResolvedValue({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskData.data,
      });

      const result = await createTask(taskData);

      expect(testAdapter.taskRepository.create).toHaveBeenCalledWith(taskData);
      expect(result).toEqual({ id: '01550709-138a-4004-b4ab-329fc46eaeasc', ...taskData.data });
    });
  });

  describe('buildGetTask', () => {
    it('gets a task by id', async () => {
      const getTask = buildGetTask(testAdapter);
      const taskId = '1';
      const task = {
        id: taskId,
        title: 'Test Task',
        description: 'Test Description',
      };

      // Create a mock implementation for testAdapter.taskRepository.get
      const getMock = jest.fn();
      testAdapter.taskRepository.get = getMock;

      // Now you can use mockResolvedValue on the mock implementation
      getMock.mockResolvedValue(task);

      const result = await getTask(taskId);

      expect(getMock).toHaveBeenCalledWith({
        where: { id: { equals: taskId } },
      });
      expect(result).toEqual(task);
    });
  });

  describe('buildUpdateTask', () => {
    it('updates a task', async () => {
      const updateTask = buildUpdateTask(testAdapter);
      const taskId = '1';
      const updateData: Prisma.TaskUpdateInput = {
        title: 'Updated Task',
      };
      (testAdapter.taskRepository.update as jest.Mock).mockResolvedValue(updateData);

      const result = await updateTask(taskId, updateData);
      expect(testAdapter.taskRepository.update).toHaveBeenCalledWith(
        updateData,
        { id: taskId }
      );

      expect(result.title).toBe('Updated Task');
    });
  });

  describe('buildRemoveTask', () => {
    it('removes a task', async () => {
      const removeTask = buildRemoveTask(testAdapter);
      const taskId = '1';
      const removedTask = { id: taskId, title: 'Removed Task' };

      (testAdapter.taskRepository.remove as jest.Mock).mockResolvedValue(removedTask);

      const result = await removeTask(taskId);

      expect(testAdapter.taskRepository.remove).toHaveBeenCalledWith({
        where: { id: taskId },
      });
      expect(result).toEqual(removedTask);
    });
  });

  describe('buildFilterTasks', () => {
    it('filters tasks', async () => {
      const filterTasks = buildFilterTasks(testAdapter);
      const filterParams = {
        skip: 0,
        take: 10,
        orderBy: { vote_count: 'asc' as Prisma.SortOrder },
        where: { title: 'Test' },
      };
      const tasks = [
        { id: '1', title: 'Test Task 1' },
        { id: '2', title: 'Test Task 2' },
      ];

      (testAdapter.taskRepository.list as jest.Mock).mockResolvedValue(tasks);

      const result = await filterTasks(filterParams);

      expect(testAdapter.taskRepository.list).toHaveBeenCalledWith(filterParams);
      expect(result).toEqual(tasks);
    });
  });
});

