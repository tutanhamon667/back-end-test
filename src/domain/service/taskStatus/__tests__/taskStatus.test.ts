import { Adapter } from '@/domain/types';
import {
  buildCreateTaskStatus,
  buildFilterTaskStatuses,
} from '../status';
import { Prisma } from '@prisma/client';
import {buildTestAdapter } from '../../../../utils/tests';

describe('TaskStatus Service', () => {
 

  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
    jest.clearAllMocks();
  });

  describe('#createTaskStatus', () => {
    it('creates a task status', async () => {
      const createTaskStatus = buildCreateTaskStatus(testAdapter);
      const taskStatusData: Prisma.TaskStatusCreateArgs = {
        data: {
          name: 'Test Status',
        },
      };

      testAdapter.taskStatusRepository.create = jest.fn().mockResolvedValue({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskStatusData.data,
      });
      const result = await createTaskStatus(taskStatusData);

      expect(testAdapter.taskStatusRepository.create)
        .toHaveBeenCalledWith(taskStatusData);
      expect(result).toEqual({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskStatusData.data,
      });
    });
  });

  describe('#filterTaskStatuses', () => {
    it('filters task statuses', async () => {
      const filterTaskStatuses = buildFilterTaskStatuses(testAdapter);
      const filterParams = {
        skip: 0,
        take: 10,
        orderBy: { name: 'asc' as Prisma.SortOrder },
        where: { name: 'Test' },
      };
      const taskStatuses = [
        { id: '1', name: 'Test Status 1' },
        { id: '2', name: 'Test Status 2' },
      ];

      (testAdapter.taskStatusRepository.list as jest.Mock).mockResolvedValue(taskStatuses);

      const result = await filterTaskStatuses(filterParams);

      expect(testAdapter.taskStatusRepository.list)
        .toHaveBeenCalledWith(filterParams);
      expect(result).toEqual(taskStatuses);
    });
  });
});
