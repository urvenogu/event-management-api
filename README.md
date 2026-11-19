# Piletirakenduse backend

Ehitad selle rakenduse ise, samm-sammult.

**👉 Alusta siit: [ALUSTA.md](ALUSTA.md)**

** App: Event management is a tool for event organisers. You can create events, set up users and different tickets and prices for tickets

** Start the app with npm install, npm install server, npm run dev
** npm run format, npm run lint, npm run typecheck

** Scripts:

- "server": "tsx --env-file=.env src/server.ts",
- "build": "tsc",
- "start": "node dist/server.js",
- "typecheck": "tsc --noEmit"

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
