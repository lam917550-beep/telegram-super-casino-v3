# 🎰 Telegram Super Casino V3

Premium Telegram Mini App Casino with **150+ games**, **500+ features**, full economy system, pets, shop, missions, achievements, leaderboards, events, and seasons.

## 🎯 Features

- **150+ Unique Games**: Dice, slots, wheels, cards, number prediction, and more
- **500+ Features**: Pets, cosmetics, titles, badges, achievements, missions
- **Virtual Economy**: Coins, gems, tickets with full ledger system
- **Pet System**: 500+ pet definitions with evolution, leveling, feeding
- **Shop & Inventory**: Dynamic pricing, daily shop rotation, cosmetics
- **Daily/Monthly Login**: Streaks, rewards, milestones
- **Missions & Quests**: Daily, weekly, monthly, seasonal, and quest chains
- **Achievements**: 500+ achievements with progression tracking
- **Leaderboards**: Multiple rankings (coins, level, XP, streak, etc.)
- **Events & Seasons**: Time-limited events, seasonal rewards
- **Admin Panel**: Full content and user management
- **Analytics**: DAU, WAU, MAU, game popularity, economy metrics
- **Premium UI**: Dark theme, neon accents, glass effects, smooth animations
- **SFX & VFX**: Audio effects, particle animations, haptic feedback
- **Performance**: Optimized for mobile, lazy loading, efficient rendering
- **Security**: Telegram auth verification, rate limiting, input validation

## 🏗️ Architecture

```
telegram-super-casino-v3/
├── apps/
│   ├── api/              # Backend (Fastify + Prisma)
│   ├── web/              # Frontend (React + Vite)
│   └── bot/              # Telegram Bot
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── shared/           # Shared utilities
│   └── game-engine/      # Game engine & validators
├── database/
│   ├── migrations/       # Prisma migrations
│   └── seed/             # Database seed
├── tests/                # Integration tests
├── docs/                 # Documentation
└── Dockerfile            # Docker configuration
```

## 📋 Prerequisites

- **Node.js** 18+
- **PostgreSQL** 14+
- **Redis** 6+
- **Telegram Bot Token** (from @BotFather)
- **npm** or **yarn**

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-org/telegram-super-casino-v3.git
cd telegram-super-casino-v3
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Database Setup

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

### 4. Start Development

```bash
npm run dev
```

Backend: http://localhost:3000
Frontend: http://localhost:5173

## 📦 Build & Deploy

### Build

```bash
npm run build
npm run typecheck
npm run lint
npm test
```

### Docker

```bash
docker build -t telegram-casino:latest .
docker run -p 3000:3000 --env-file .env telegram-casino:latest
```

### Render

1. Connect repository to Render
2. Configure environment variables
3. Deploy using `render.yaml`

## 🤖 Telegram Bot Setup

1. Get bot token from @BotFather
2. Set webhook or use polling
3. User sends `/start` → Opens Mini App
4. Mini App loads with Telegram auth

## 🎮 Game Engine

Games are data-driven. Add new games by:

1. Define game in `GameRegistry`
2. Implement validator in `GameValidator`
3. Implement resolver in `GameResolver`
4. Add to seed data

No code changes required for new games.

## 🐾 Pet System

- **500+ Pet Definitions**: Common to Mythic rarity
- **Evolution**: Some pets evolve at level 10, 25, 50
- **Bonding**: Increases XP gain
- **Stats**: HP, ATK, DEF, SPD
- **Economy**: Sell always < buy price

## 💰 Economy

- **Atomic Transactions**: All ledger-backed
- **Anti Double-Spend**: DB locks, idempotency keys
- **Bet Limits**: Server-side validation
- **Payout**: Calculated by game resolver
- **No Real Money**: Virtual currency only

## 🧪 Testing

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📊 Admin Panel

Access at `/admin` (requires admin role).

**Features:**
- User management
- Game configuration
- Pet definitions
- Shop items
- Missions & achievements
- Events & seasons
- Analytics dashboard
- Audit logs

## 🔐 Security

- **Telegram Auth**: Hash verification of Mini App init data
- **API Validation**: Zod schemas for all requests
- **Rate Limiting**: Per-endpoint rate limits
- **SQL Injection**: Prisma ORM prevents injection
- **CORS**: Configured for Telegram WebApp
- **Secrets**: Never logged or exposed
- **Authorization**: Role-based access control

## ⚡ Performance

- **Lazy Loading**: Games, pets, cosmetics load on demand
- **Bundle Splitting**: ~150KB initial JS
- **Database Indexes**: On all query columns
- **Redis Cache**: For leaderboards, shop
- **Image Optimization**: WebP format, lazy load
- **Audio Optimization**: Compressed, preload critical only

## 📱 Mobile Optimization

- **Safe Area**: Notch support for iOS
- **Viewport**: Full-screen for Telegram Mini App
- **Touch**: Optimized for mobile gestures
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Offline**: Service worker for cache

## 🐛 Troubleshooting

### Database Connection Failed
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL in .env
# Run: npm run db:migrate
```

### Telegram Auth Failed
```bash
# Verify TELEGRAM_BOT_TOKEN
# Verify Mini App URL is correct
# Check init data signature
```

### Hot Reload Not Working
```bash
# Clear node_modules: rm -rf node_modules
# Reinstall: npm install
# Restart: npm run dev
```

## 📈 Monitoring

- **Health Check**: GET `/health`
- **Ready Check**: GET `/ready`
- **Logs**: Structured JSON logs with requestId
- **Metrics**: Prometheus endpoint at `/metrics`

## 📚 API Documentation

OpenAPI/Swagger available at `/api/docs`

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-game`
2. Commit: `git commit -am 'Add amazing game'`
3. Push: `git push origin feature/amazing-game`
4. Open PR

## 📄 License

MIT

## 🎮 Game Categories

- **Dice**: Dice Duel, Dice Race, High/Low
- **Coin**: Coin Flip, Lucky Heads
- **Wheel**: Lucky Spin, Treasure Wheel
- **Slots**: 5-Reel, 3-Reel, Mega Spin
- **Card**: Higher Card, Red/Black, Blackjack
- **Number**: Lucky Number, Number Range, Roulette
- **Multiplier**: Rocket, Crash, Ladder
- **Memory**: Memory Match, Card Memory
- **Reaction**: Click Speed, Tap Faster
- **Grid**: Grid Match, Grid Puzzle
- **Treasure**: Treasure Chest, Mystery Box
- **Door**: Safe Pick, Door Opener
- **PvP**: 1v1 Battle, Quick Duel
- **Tournament**: Weekly Tournament, Bracket
- **Race**: Betting Race, Pet Race
- **Quick**: Quick Win, Flash Game
- **Puzzle**: Tile Match, Pattern
- **Collection**: Collect & Win, Set Bonus
- **Challenge**: Daily Challenge, Timed Challenge
- **And 130+ more unique games**

## 🎵 Audio & Visual Effects

- **SFX**: Click, win, lose, level up, achievement
- **VFX**: Coin burst, sparkle, card reveal, wheel glow
- **Haptics**: Vibration feedback on key actions
- **Animations**: Smooth transitions, particle effects
- **Themes**: Dark mode, neon accents, glass morphism

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for Telegram Mini App enthusiasts**
