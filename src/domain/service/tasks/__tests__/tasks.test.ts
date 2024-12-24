import { Adapter } from '@/domain/types';
import {
  buildCreateTask,
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

