import { randomBytes } from 'crypto';
import { CasinoError } from '../types/index.js';

export function generateId(): string {
  return randomBytes(16).toString('hex');
}

export function generateRoundId(): string {
  return randomBytes(16).toString('hex');
}

export function generateIdempotencyKey(): string {
  return randomBytes(18).toString('hex');
}

export function createError(
  code: string,
  message: string,
  statusCode: number = 400,
  metadata?: Record<string, unknown>
): CasinoError {
  return new CasinoError(code, message, statusCode, metadata);
}

export function validateBet(bet: bigint, minBet: bigint, maxBet: bigint): boolean {
  return bet >= minBet && bet <= maxBet && bet > 0n;
}

export function calculatePayout(bet: bigint, multiplier: number): bigint {
  return BigInt(Math.floor(Number(bet) * multiplier));
}

export function validateUsername(username: string): boolean {
  const { USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH, USERNAME_PATTERN } = require('./constants');
  return (
    username.length >= USERNAME_MIN_LENGTH &&
    username.length <= USERNAME_MAX_LENGTH &&
    USERNAME_PATTERN.test(username)
  );
}

export function formatCurrency(amount: bigint): string {
  return new Intl.NumberFormat('en-US').format(Number(amount));
}

export function getCurrentTimestamp(): Date {
  return new Date();
}

export function getRequestId(): string {
  return generateId();
}
