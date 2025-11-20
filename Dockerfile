# Builder
FROM node:22-alpine AS builder
WORKDIR /app

RUN echo "node-linker=hoisted" > .npmrc && \
    echo "shamefully-hoist=true" >> .npmrc

RUN apk add --no-cache openssl libc6-compat python3 make g++

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install                  # <<< sem --frozen-lockfile

COPY . .

RUN pnpm prisma generate
RUN pnpm run build

# Runtime
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=4000

RUN echo "node-linker=hoisted" > .npmrc && \
    echo "shamefully-hoist=true" >> .npmrc

RUN apk add --no-cache openssl
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

EXPOSE 4000
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["pnpm", "start"]