import { z } from 'zod';

export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(20, 'Username must be at most 20 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
  .toLowerCase();

export const betAmountSchema = z.number().positive('Bet must be positive').finite();

export const gameIdSchema = z.string().uuid('Invalid game ID');

export const userIdSchema = z.string().uuid('Invalid user ID');

export const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(20),
});

export function validateUsername(username: string): string {
  return usernameSchema.parse(username);
}

export function validateBetAmount(amount: number, minBet: number, maxBet: number): number {
  const validated = betAmountSchema.parse(amount);
  if (validated < minBet) throw new Error(`Bet must be at least ${minBet}`);
  if (validated > maxBet) throw new Error(`Bet cannot exceed ${maxBet}`);
  return validated;
}

export function validateEmail(email: string): string {
  return z.string().email().parse(email);
}

export function validatePagination(page: number, pageSize: number) {
  return paginationSchema.parse({ page, pageSize });
}
