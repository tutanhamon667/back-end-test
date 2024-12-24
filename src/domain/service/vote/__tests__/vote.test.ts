import { Adapter } from '@/domain/types';
import {
  buildVoteCreate,
  buildVoteRemove,
} from '../vote';
import { Prisma } from '@prisma/client';
import {buildTestAdapter } from '../../../../utils/tests';
describe('Vote Service', () => {

  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
    jest.clearAllMocks();
  });

  describe('#createVote', () => {
    it('creates a vote', async () => {
      const createVote = buildVoteCreate(testAdapter);
      const voteData: Prisma.VoteCreateArgs = {
        data: {
          task_id: 'task-1',
          user_id: 'user-1',
        },
      };

      testAdapter.voteRepository.create = jest.fn().mockResolvedValue({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...voteData.data,
      });
      const result = await createVote(voteData);

      expect(testAdapter.voteRepository.create)
        .toHaveBeenCalledWith(voteData);
      expect(result).toEqual({
        id: '01550709-138a-4004-b4ab-329fc46eaeasc',
        ...voteData.data,
      });
    });
  });

  describe('#removeVote', () => {
    it('removes a vote', async () => {
      const removeVote = buildVoteRemove(testAdapter);
      const voteId = 'vote-1';

      testAdapter.voteRepository.remove = jest.fn().mockResolvedValue({});
      const result = await removeVote({ where: { id: voteId } });

      expect(testAdapter.voteRepository.remove)
        .toHaveBeenCalledWith({ where: { id: voteId } });
      expect(result).toEqual({});
    });
  });
});

