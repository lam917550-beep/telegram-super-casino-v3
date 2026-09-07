import type { GameDefinition } from '@casino/types';
import { generateSecureRandom } from '@casino/shared';

export interface GameResolveInput {
  gameId: string;
  bet: number;
  currency: 'coin' | 'gem';
  clientSeed?: string;
  nonce?: number;
  metadata?: Record<string, any>;
}

export interface GameResolveOutput {
  result: 'win' | 'loss' | 'draw';
  multiplier: number;
  payout: number;
  gameData: Record<string, any>;
}

export class GameResolver {
  private resolvers: Map<string, (input: GameResolveInput, game: GameDefinition) => GameResolveOutput> = new Map();

  registerResolver(
    gameId: string,
    resolver: (input: GameResolveInput, game: GameDefinition) => GameResolveOutput
  ): void {
    this.resolvers.set(gameId, resolver);
  }

  resolve(gameId: string, input: GameResolveInput, game: GameDefinition): GameResolveOutput {
    const resolver = this.resolvers.get(gameId) || this.resolvers.get(game.category);
    if (!resolver) throw new Error(`No resolver for game: ${gameId}`);
    return resolver(input, game);
  }

  // Generic resolvers for game categories
  private dicResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const roll = generateSecureRandom(1, 6);
    const userRoll = generateSecureRandom(1, 6);
    const win = roll > userRoll;
    const multiplier = win ? 1.9 : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { playerRoll: userRoll, houseRoll: roll },
    };
  };

  private coinFlipResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const result = generateSecureRandom(0, 2) === 0 ? 'heads' : 'tails';
    const win = Math.random() > 0.5;
    const multiplier = win ? 1.9 : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { result },
    };
  };

  private wheelResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const segments = 8;
    const position = generateSecureRandom(0, segments);
    const winSegments = [0, 3, 5, 7];
    const win = winSegments.includes(position);
    const multipliers = [2.5, 0.5, 0, 3.0, 0, 1.8, 0, 4.0];
    const multiplier = win ? multipliers[position] : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { position, jackpot: position === 7 },
    };
  };

  private slotsResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const reels = [
      generateSecureRandom(0, 10),
      generateSecureRandom(0, 10),
      generateSecureRandom(0, 10),
    ];
    const matches = reels[0] === reels[1] && reels[1] === reels[2];
    const multiplier = matches ? 5.0 : generateSecureRandom(0, 2) === 0 ? 1.5 : 0;
    return {
      result: multiplier > 0 ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { reels, match: matches },
    };
  };

  private cardResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const playerCard = generateSecureRandom(1, 14);
    const houseCard = generateSecureRandom(1, 14);
    const win = playerCard > houseCard;
    const multiplier = win ? 1.95 : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { playerCard, houseCard },
    };
  };

  private numberResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const target = input.metadata?.target || 50;
    const result = generateSecureRandom(1, 100);
    const win = Math.abs(result - target) <= 10;
    const multiplier = win ? 2.0 : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { target, result },
    };
  };

  private rocketResolver = (input: GameResolveInput, game: GameDefinition): GameResolveOutput => {
    const crashPoint = Math.random() * 10 + 1.01;
    const cashoutPoint = input.metadata?.cashout || crashPoint * 0.9;
    const win = cashoutPoint < crashPoint;
    const multiplier = win ? cashoutPoint : 0;
    return {
      result: win ? 'win' : 'loss',
      multiplier,
      payout: Math.floor(input.bet * multiplier),
      gameData: { crashPoint, cashoutPoint },
    };
  };

  constructor() {
    this.registerResolver('dice', this.dicResolver);
    this.registerResolver('coin', this.coinFlipResolver);
    this.registerResolver('wheel', this.wheelResolver);
    this.registerResolver('slots', this.slotsResolver);
    this.registerResolver('card', this.cardResolver);
    this.registerResolver('number', this.numberResolver);
    this.registerResolver('multiplier', this.rocketResolver);
  }
}

export const gameResolver = new GameResolver();
