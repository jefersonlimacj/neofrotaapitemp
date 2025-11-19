# Histórico de Alterações

Este arquivo registra as principais alterações e melhorias feitas no sistema Neofrota. Cada atualização é explicada de forma clara e acessível, focando no impacto positivo para o negócio e para os usuários.

---

## 11/11/2025

### Correção Crítica do Build e Estabilização do Ambiente Docker

Esta atualização focou em resolver problemas críticos que impediam a construção e execução da aplicação em ambientes Docker, garantindo que o processo de deploy seja confiável e robusto.

- **Resolução de Falhas no Build do Docker:** Corrigido um erro fundamental no processo de build onde as dependências da aplicação eram corrompidas. A introdução de um arquivo `.dockerignore` agora garante builds limpos e consistentes.
- **Estabilização de Dependências:** Resolvido um conflito de tipos do TypeScript que impedia a compilação do projeto. Isso foi causado por uma incompatibilidade de versões entre as bibliotecas do servidor (`Apollo`) e do framework web (`Express`), que agora foi corrigida.
- **Padronização das Variáveis de Ambiente:** Os arquivos de configuração (`docker-compose.yml` e `stack.env`) foram revisados e padronizados para usar nomes de variáveis mais claros e diretos para o banco de dados, facilitando a configuração em ambientes de produção como o Portainer.
- **Otimização de Scripts:** Os scripts internos do projeto foram ajustados para remover passos redundantes e garantir o uso consistente do gerenciador de pacotes `pnpm`, melhorando a manutenibilidade.

---

## 05/11/2025

### Melhorias no Processo de Build e Estrutura do Projeto

- **Introdução de um processo de build:** Adicionado um script de build que compila o código TypeScript para JavaScript. Isso melhora o desempenho em produção e ajuda a pegar erros mais cedo.
- **Organização do código:** O arquivo principal `index.ts` foi movido para a pasta `src`, centralizando todo o código da aplicação em um único lugar.
- **Correção de dependências:** Foram corrigidos problemas de versão de algumas dependências que estavam causando erros na compilação.
- **Geração do Prisma Client:** O Prisma Client agora é gerado automaticamente durante a instalação das dependências e a cada build, garantindo que ele esteja sempre atualizado.

### Melhorias na Tipagem e Tratamento de Nulos

- **Tipagem Forte:** Adicionada tipagem explícita em vários resolvers para eliminar o uso implícito de `any`, melhorando a clareza e a segurança do código.
- **Tratamento de Valores Nulos:** Implementadas verificações de valores nulos em consultas ao banco de dados para evitar erros de tipo e garantir que a aplicação lide corretamente com dados opcionais.

### Padronização do Código

- **Importações do Prisma Client:** Padronizadas as importações do Prisma Client para usar o caminho `@prisma/client`, removendo as referências ao antigo diretório `generated/prisma/client`.

### Configuração Docker e Ambiente de Produção

- **Dockerização Completa:** Criados `Dockerfile`, `docker-compose.yml` e `entrypoint.sh` para empacotar a aplicação em contêineres Docker, facilitando o deploy e a padronização do ambiente.
- **Ambiente de Banco de Dados:** Integrado um serviço de banco de dados PostgreSQL via Docker Compose, com persistência de dados e configuração de variáveis de ambiente.
- **Gerenciamento de Variáveis de Ambiente:** Criado `stack.env` para facilitar a configuração das variáveis de ambiente em plataformas como o Portainer, e `.env.example` para referência local.
- **Otimização de Imagem Docker:** Implementado multi-stage build no `Dockerfile` para gerar imagens Docker menores e mais eficientes para produção.
---