import { Adapter } from '@/domain/types';
import { buildCheckCredentials } from '../checkCredentials';
import { buildTestAdapter } from '../../../../utils/tests';


describe('Auth Service', () => {

  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
    jest.clearAllMocks();
  });

  describe('#checkCredentials', () => {

    it('rejects invalid credentials', async () => {
      const checkCredentials = buildCheckCredentials(testAdapter);
      const credentials = {
        email: 'wrong@example.com',
        password: 'wrongpassword',
      };

      (testAdapter.userRepository.get as jest.Mock) = jest.fn().mockResolvedValue(null);

      const result = await checkCredentials(credentials);

      expect(testAdapter.userRepository.get).toHaveBeenCalledWith({
        where: {
          email: {
            equals: credentials.email,
            mode: 'insensitive',
          },
          password: {
            not: null,
          },
        },
        select: {
          id: true,
          email: true,
          password: true,
          avatar: true,
          created_at: true,
        },
      });
      expect(result).toBeNull();
    });
  });
});

