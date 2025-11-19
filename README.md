# Neofrota - Serviço de API

Bem-vindo ao projeto da API do Neofrota! Este documento explica tudo o que você precisa saber para configurar e executar este projeto.

## Sobre o Projeto

Esta é uma API GraphQL desenvolvida em **TypeScript** e **Node.js**. Ela serve como o backend para o sistema Neofrota, gerenciando dados de motoristas, veículos, rotas e muito mais.

As principais tecnologias utilizadas são:
- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Express**: Framework web para criar o servidor HTTP.
- **Apollo Server**: Para construir o servidor GraphQL e expor os dados.
- **Prisma**: ORM para interagir com o banco de dados de forma segura e moderna.
- **PostgreSQL**: Banco de dados relacional onde os dados são armazenados.
- **Docker**: Para criar um ambiente de desenvolvimento e produção padronizado e fácil de distribuir.

---

## Como Executar o Projeto (Ambiente Docker)

A maneira mais fácil e recomendada de executar este projeto é usando Docker, pois ele cuida de toda a configuração do banco de dados e do ambiente da aplicação para você.

### Pré-requisitos

- **Docker**: [Instale o Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Geralmente já vem com a instalação do Docker.

### 1. Configuração do Ambiente

Antes de iniciar, você precisa configurar as variáveis de ambiente.

1.  Na raiz do projeto, você encontrará um arquivo chamado `.env`. É ele quem guarda as configurações e segredos da aplicação.
2.  Abra o arquivo `.env` e verifique se as variáveis estão configuradas. Para um ambiente de desenvolvimento local, os valores padrão devem funcionar.

**Exemplo do arquivo `.env`:**
```
# URL de conexão que o Prisma usa para se conectar ao banco de dados
DATABASE_URL="postgresql://neofrota:neofrota@db:5432/neofrota?schema=public"

# Segredo para gerar os tokens de autenticação (JWT)
# EM PRODUÇÃO, MUDE PARA UM VALOR FORTE E ÚNICO!
JWT_SECRET="seu-segredo-super-secreto"

# Credenciais usadas pelo Docker para inicializar o banco de dados PostgreSQL
POSTGRES_USER=neofrota
POSTGRES_PASSWORD=neofrota
POSTGRES_DB=neofrota

# Define o ambiente da aplicação
NODE_ENV=production
```

### 2. Subindo os Contêineres

Com o Docker em execução na sua máquina, abra um terminal na raiz do projeto e execute o seguinte comando:

```bash
docker-compose up --build
```

**O que este comando faz?**
- `--build`: Constrói as imagens Docker para a API e para o banco de dados a partir do zero. Você só precisa usar `--build` na primeira vez ou quando houver alterações nos arquivos de configuração (como `Dockerfile` ou `package.json`). Nas próximas vezes, `docker-compose up` é suficiente.
- `up`: Inicia todos os serviços definidos no `docker-compose.yml`.

Se você quiser que os serviços rodem em segundo plano, adicione a flag `-d`:
```bash
docker-compose up -d --build
```

---

## Acessando a Aplicação

Após os contêineres iniciarem com sucesso:

- **GraphQL Playground**: Abra seu navegador e acesse `http://localhost:4000`. Você verá uma interface gráfica onde pode explorar a API e fazer consultas GraphQL.
- **Health Check**: Para verificar se a API está no ar, acesse `http://localhost:4000/ping`. Ela deve responder com `pong`.

---

## Scripts Disponíveis

Estes são os scripts definidos no `package.json`, úteis principalmente para desenvolvimento fora do Docker.

- `pnpm dev`
  - Inicia o servidor em modo de desenvolvimento. Usa o `nodemon` para reiniciar o servidor automaticamente sempre que um arquivo `.ts` é alterado.

- `pnpm build`
  - Compila todo o código TypeScript (`.ts`) da pasta `src/` para JavaScript (`.js`) na pasta `dist/`. É usado para gerar a versão de produção da aplicação.

- `pnpm start`
  - Executa o código JavaScript compilado a partir da pasta `dist/`. É este comando que o Docker usa para rodar a aplicação em produção.

- `pnpm clean`
  - Apaga a pasta `dist/` para garantir uma compilação limpa.

---

## Variáveis de Ambiente

Aqui está uma explicação detalhada de cada variável de ambiente definida no arquivo `.env`.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `DATABASE_URL` | A URL de conexão completa que o Prisma usa para se comunicar com o banco de dados. | `postgresql://user:pass@host:port/db` |
| `JWT_SECRET` | Uma chave secreta usada para assinar os tokens de autenticação (JWT). **Deve ser longa, aleatória e secreta em produção.** | `minha-chave-super-secreta-12345` |
| `POSTGRES_USER` | O nome de usuário para o banco de dados PostgreSQL. | `neofrota` |
| `POSTGRES_PASSWORD` | A senha para o usuário do banco de dados PostgreSQL. | `neofrota` |
| `POSTGRES_DB` | O nome do banco de dados que será criado no PostgreSQL. | `neofrota` |
| `NODE_ENV` | Define o ambiente da aplicação. Pode ser `development` ou `production`. | `production` |

**Onde setar as variáveis?**
- **Para rodar com Docker (recomendado):** No arquivo `.env` na raiz do projeto.
- **Para rodar em produção (Portainer/outro):** O ideal é configurar as variáveis de ambiente diretamente na plataforma de deploy, como na seção "Environment variables" de uma Stack no Portainer.
