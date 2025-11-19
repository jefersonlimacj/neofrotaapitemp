#!/bin/sh

# Aguarda o banco de dados estar pronto

echo "Aguardando o banco de dados..."

while ! nc -z $DB_HOST $DB_PORT; do
  sleep 2
done

echo "Banco de dados pronto!"

# Gera o cliente Prisma
echo "Gerando o cliente Prisma..."
pnpm exec prisma generate || { echo "Falha ao gerar o cliente Prisma. Exiting." ; exit 1; }
echo "Cliente Prisma gerado."

# Executa as migrações do Prisma
echo "Executando as migrações do banco de dados..."
pnpm exec prisma migrate deploy || { echo "Falha nas migrações do Prisma. Exiting." ; exit 1; }
echo "Migrações concluídas."

# Executa o comando principal da aplicação
exec "$@"
