# -------------------------
# Builder
# -------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Força hoisting (essa é a linha que resolve o seu erro de uma vez)
RUN echo "node-linker=hoisted" > .npmrc && \
    echo "shamefully-hoist=true" >> .npmrc

# Instala dependências do sistema
RUN apk add --no-cache openssl libc6-compat python3 make g++

# Corepack + pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia manifests
COPY package.json pnpm-lock.yaml* ./

# Instala dependências
RUN pnpm install --frozen-lockfile

# Copia o resto do código
COPY . .

# Gera o Prisma Client (agora vai aparecer em node_modules/.prisma/client)
RUN pnpm prisma generate

# Compila
RUN pnpm run build

# -------------------------
# Runtime
# -------------------------
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Mesma coisa no runtime (senão dá erro na hora de startar)
RUN echo "node-linker=hoisted" > .npmrc && \
    echo "shamefully-hoist=true" >> .npmrc

RUN apk add --no-cache openssl

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia só o necessário
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.npmrc ./.npmrc

# entrypoint
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

EXPOSE 4000

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["pnpm", "start"]