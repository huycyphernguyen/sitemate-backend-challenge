## Getting Started

`pnpm` is recommended, which is an incredibly fast alternative to `npm` for installing packages. It's not required, but we highly recommend you give it a try. You can download the latest version here: https://pnpm.io/


## Docker

This project leverages on Docker to quickly setup the local development stack.
Install Docker https://www.docker.com/products/docker-desktop/

To enable external service dependencies for this project simply
```bash
docker-compose up
```
This will create `postgresdb` and `redis` container respectively.
You should then be able to start the API dev process. This will start up your Nest.js server at http://localhost:5000/api
```bash
cd packages/api
pnpm i
pnpm dev
```

This will start up your Next.js web app at http://localhost:3000
```bash
cd packages/web
pnpm i
pnpm dev
```

To start a prod-like end to end environment (staging) that is ready for deployment.
```bash
docker compose -f "docker-compose.production.yml" up -d --build
```

*Regular `npm` can always be used instead and all `pnpm` equivalent commands should work normally.
