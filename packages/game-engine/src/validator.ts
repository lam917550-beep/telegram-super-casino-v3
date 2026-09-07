import type { GameDefinition, GameRound } from '@casino/types';
import { ValidationError } from '@casino/shared';

export interface GameInput {
  gameId: string;
  bet: number;
  currency: 'coin' | 'gem';
  userBalance: number;
  clientSeed?: string;
  nonce?: number;
  metadata?: Record<string, any>;
}

export class GameValidator {
  validateGame(gameId: string, game: GameDefinition | undefined): void {
    if (!game) throw new ValidationError(`Game not found: ${gameId}`);
    if (!game.enabled) throw new ValidationError(`Game is disabled: ${gameId}`);
  }

  validateBet(game: GameDefinition, bet: number, currency: 'coin' | 'gem'): void {
    if (bet <= 0) throw new ValidationError('Bet must be positive');
    if (bet !== Math.round(bet)) throw new ValidationError('Bet must be a whole number');

    if (currency === 'coin') {
      if (bet < game.minBet) throw new ValidationError(`Bet must be at least ${game.minBet}`);
      if (bet > game.maxBet) throw new ValidationError(`Bet cannot exceed ${game.maxBet}`);
    } else if (currency === 'gem') {
      if (game.minBetGem && bet < game.minBetGem)
        throw new ValidationError(`Bet must be at least ${game.minBetGem} gems`);
      if (game.maxBetGem && bet > game.maxBetGem)
        throw new ValidationError(`Bet cannot exceed ${game.maxBetGem} gems`);
    }
  }

  validateBalance(balance: number, bet: number): void {
    if (balance < bet) throw new ValidationError('Insufficient balance for this bet');
  }

  validateInput(input: GameInput, game: GameDefinition): void {
    this.validateGame(input.gameId, game);
    this.validateBet(game, input.bet, input.currency);
    this.validateBalance(input.userBalance, input.bet);
  }
}

export const gameValidator = new GameValidator();
