import { Adapter } from '@/domain/types';
import {
  buildCreateTaskCategory,
  buildFilterTaskCategories,
} from '../category';
import { Prisma } from '@prisma/client';
import {buildTestAdapter } from '../../../../utils/tests';
describe('TaskCategory Service', () => {
 
  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
    jest.clearAllMocks();
  });

  describe('#createTaskCategory', () => {
    it('creates a task category', async () => {
      const createTaskCategory = buildCreateTaskCategory(testAdapter);
      const taskCategoryData: Prisma.TaskCategoryCreateArgs = {
        data: {
          name: 'Test Category',
        },
      };

      testAdapter.taskCategoryRepository.create = jest.fn().mockResolvedValue({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskCategoryData.data,
      });
      const result = await createTaskCategory(taskCategoryData);

      expect(testAdapter.taskCategoryRepository.create)
        .toHaveBeenCalledWith(taskCategoryData);
      expect(result).toEqual({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...taskCategoryData.data,
      });
    });
  });

  describe('#filterTaskCategories', () => {
    it('filters task categories', async () => {
      const filterTaskCategories = buildFilterTaskCategories(testAdapter);
      const filterParams = {
        skip: 0,
        take: 10,
        orderBy: { name: 'asc' as Prisma.SortOrder },
        where: { name: 'Test' },
      };
      const taskCategories = [
        { id: '1', name: 'Test Category 1' },
        { id: '2', name: 'Test Category 2' },
      ];

      (testAdapter.taskCategoryRepository.list as jest.Mock).mockResolvedValue(taskCategories);

      const result = await filterTaskCategories(filterParams);

      expect(testAdapter.taskCategoryRepository.list)
        .toHaveBeenCalledWith(filterParams);
      expect(result).toEqual(taskCategories);
    });
  });
});

