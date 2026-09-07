import { createHmac } from 'crypto';

export function verifyTelegramInit(initData: string, botToken: string): boolean {
  const urlParams = new URLSearchParams(initData);
  const hash = urlParams.get('hash');

  if (!hash) return false;

  const dataCheckString = Array.from(urlParams)
    .filter(([key]) => key !== 'hash')
    .sort()
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const secretKey = createHmac('sha256', 'WebAppData').update(botToken).digest();
  const signature = createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  return signature === hash;
}

export function parseTelegramInitData(initData: string): Record<string, any> {
  const urlParams = new URLSearchParams(initData);
  const data: Record<string, any> = {};

  for (const [key, value] of urlParams) {
    if (key === 'user' || key === 'chat') {
      data[key] = JSON.parse(value);
    } else {
      data[key] = value;
    }
  }

  return data;
}

export function generateSecureRandom(min: number, max: number): number {
  const range = max - min;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const randomBytes = require('crypto').randomBytes(bytesNeeded);
  const randomNumber = randomBytes.readUIntBE(0, bytesNeeded);
  return min + (randomNumber % range);
}

export function generateNonce(): string {
  return require('crypto').randomBytes(16).toString('hex');
}

export function hashPassword(password: string): string {
  return require('crypto').createHash('sha256').update(password).digest('hex');
}
