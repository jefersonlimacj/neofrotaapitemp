# -------------------------
# Etapa 1 — Builder
# -------------------------
  FROM node:22-alpine AS builder

  # Evita avisos e garante encoding UTF-8
  ENV LANG=C.UTF-8
  ENV NODE_ENV=development
  
  # Instala dependências do sistema necessárias (Prisma, bcrypt, etc.)
  RUN apk add --no-cache openssl libc6-compat python3 make g++
  
  WORKDIR /app
  
  # Instala a versão mais recente do pnpm globalmente
  RUN corepack enable && corepack prepare pnpm@latest --activate
  
  # Copia apenas os manifests para otimizar cache
  COPY package.json pnpm-lock.yaml* ./
  
  # Instala todas as dependências (incluindo dev)
  RUN pnpm install --frozen-lockfile=false
  
  # Copia o restante do projeto
  COPY . .
  
  # Gera o Prisma Client (antes do build)
  RUN pnpm prisma generate
  
  # Compila o TypeScript
  RUN pnpm run build
  
  
  # -------------------------
  # Etapa 2 — Runtime
  # -------------------------
  FROM node:22-alpine AS runner
  
  # Mantém a imagem mínima possível
  RUN apk add --no-cache openssl
  
  WORKDIR /app
  
  ENV NODE_ENV=production
  ENV PORT=4000
  
  # Habilita o corepack para usar pnpm no runtime
  RUN corepack enable && corepack prepare pnpm@latest --activate
  
  # Copia apenas o necessário da etapa anterior
  COPY --from=builder /app/package.json ./package.json
  COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/dist ./dist
  COPY --from=builder /app/prisma ./prisma
  
  # Expondo a porta do app
  EXPOSE 4000
  
  # Copia o entrypoint.sh e o torna executável
  COPY entrypoint.sh /app/entrypoint.sh
  RUN chmod +x /app/entrypoint.sh
  
  # Define o entrypoint para o script
  ENTRYPOINT ["/app/entrypoint.sh"]
  # Comando de inicialização
  CMD ["pnpm", "start"]
  