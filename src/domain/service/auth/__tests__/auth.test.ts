import { Adapter } from '@/domain/types';
import { buildCheckCredentials } from '../checkCredentials';
import * as bcrypt from 'bcrypt';
import { buildTestAdapter } from '../../../../utils/tests';


describe('Auth Service', () => {

  let testAdapter: Adapter;

  beforeEach(() => {
    testAdapter = buildTestAdapter();
    jest.clearAllMocks();
  });

  describe('#checkCredentials', () => {
    it('validates user credentials', async () => {
      const checkCredentials = buildCheckCredentials(testAdapter);
      const credentials = {
        email: 'test@example.com',
        password: 'password123',
      };

      (testAdapter.userRepository.get as jest.Mock) = jest.fn().mockResolvedValue({
        id: '01550709-test-4004-b4ab-329fc46eee6c',
        email: credentials.email,
        passwordHash:  bcrypt.hashSync(credentials.password as string, 10)
      });

      const result = await checkCredentials(credentials);

      expect(testAdapter.userRepository.get).toHaveBeenCalledWith({
        where: {
          email: {
            mode: 'insensitive',
            equals: credentials.email
          },
          password: {
            not: null,
            equals:  bcrypt.hashSync(credentials.password as string, 10)
          }
        },
        select: {
          id: true,
          email: true,
          password: true,
          avatar: true,
          created_at: true
        }

      });
      expect(result).toBe(true);
    });

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

