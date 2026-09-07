import type { GameDefinition, GameCategory, GameDifficulty } from '@casino/types';

export class GameRegistry {
  private games: Map<string, GameDefinition> = new Map();
  private gamesByCategory: Map<GameCategory, GameDefinition[]> = new Map();

  register(game: GameDefinition): void {
    this.games.set(game.id, game);
    if (!this.gamesByCategory.has(game.category)) {
      this.gamesByCategory.set(game.category, []);
    }
    this.gamesByCategory.get(game.category)!.push(game);
  }

  registerBulk(games: GameDefinition[]): void {
    games.forEach((game) => this.register(game));
  }

  get(id: string): GameDefinition | undefined {
    return this.games.get(id);
  }

  getAll(): GameDefinition[] {
    return Array.from(this.games.values());
  }

  getByCategory(category: GameCategory): GameDefinition[] {
    return this.gamesByCategory.get(category) || [];
  }

  getEnabled(): GameDefinition[] {
    return this.getAll().filter((g) => g.enabled);
  }

  getByDifficulty(difficulty: GameDifficulty): GameDefinition[] {
    return this.getAll().filter((g) => g.difficulty === difficulty);
  }

  exists(id: string): boolean {
    return this.games.has(id);
  }

  count(): number {
    return this.games.size;
  }

  getCategories(): GameCategory[] {
    return Array.from(this.gamesByCategory.keys());
  }

  getRandomGame(): GameDefinition | undefined {
    const games = this.getEnabled();
    return games[Math.floor(Math.random() * games.length)];
  }

  getRandomGameByCategory(category: GameCategory): GameDefinition | undefined {
    const games = this.getByCategory(category).filter((g) => g.enabled);
    return games[Math.floor(Math.random() * games.length)];
  }
}

export const gameRegistry = new GameRegistry();
