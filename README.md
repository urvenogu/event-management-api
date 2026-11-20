# Piletirakenduse backend

Ehitad selle rakenduse ise, samm-sammult.

**👉 Alusta siit: [ALUSTA.md](ALUSTA.md)**

** App: Event management is a tool for event organisers. You can create events, set up users and different tickets and prices for tickets

** Start the app with npm install, npm install server, npm run dev
** npm run format, npm run lint, npm run typecheck, 
** docker compose up -d, docker compose down

**Workflow
** every issue has a branch. With PR (pull request) will be checked the code and added to master.
** issue 6: installing zod

When to use 
feat:	uus võimalus
fix:	vea parandus
refactor:	koodi ümberkorraldus ilma käitumist muutmata
chore:	seadistus, paketid
docs:	README, dokumentatsioon
test:	testid


** Scripts:

- "server": "tsx --env-file=.env src/server.ts",
- "build": "tsc",
- "start": "node dist/server.js",
- "typecheck": "tsc --noEmit",
- "lint": "oxlint",
- "format": "prettier --write .",
- "format:check": "prettier --check .",
- "db:generate": "drizzle-kit generate",
- "db:migrate": "drizzle-kit migrate",
- "db:studio": "drizzle-kit studio"

** Every completed issue will add a new script.

**Structure

```
src/
├── event/                 ← üks domeen = üks kaust
│   ├── event.routes.ts        aadressid + ühendused (DI)
│   ├── event.controller.ts    HTTP: valideeri, kutsu service'it, tee vastus
│   ├── event.service.ts       äriloogika
│   ├── event.repository.ts    ainus koht, kus on SQL
│   └── dto/                   päringu ja vastuse kujud
├── shared/                ← mitme domeeni ühine (vead, valideerimine)
├── config/                ← keskkonnamuutujad
├── db/                    ← andmebaasi ühendus ja skeemid
├── scripts/               ← käsurea skriptid (seeder, make-admin)
├── app.ts
└── server.ts
tests/                     ← peegeldab src/ struktuuri

```

