import type { GameDefinition } from '@casino/types';

export class GameRewardCalculator {
  calculatePayout(game: GameDefinition, bet: number, multiplier: number): number {
    return Math.floor(bet * Math.max(0, multiplier));
  }

  calculateHouseEdge(game: GameDefinition, multiplier: number): number {
    return game.house_edge;
  }

  calculateRTP(game: GameDefinition): number {
    return game.rtp;
  }

  calculateNetPayout(game: GameDefinition, bet: number, multiplier: number): number {
    const payout = this.calculatePayout(game, bet, multiplier);
    const profit = payout - bet;
    return profit;
  }

  calculateProfit(bet: number, payout: number): number {
    return payout - bet;
  }

  isWinning(multiplier: number): boolean {
    return multiplier > 0;
  }

  applyStreakBonus(payout: number, streak: number, maxStreakBonus: number = 1.5): number {
    if (streak <= 0) return payout;
    const bonus = Math.min(1 + streak * 0.05, maxStreakBonus);
    return Math.floor(payout * bonus);
  }

  calculateVigBet(payout: number, vigorish: number = 0.02): number {
    return Math.floor(payout * vigorish);
  }
}

export const gameRewardCalculator = new GameRewardCalculator();
