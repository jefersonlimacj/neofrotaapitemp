import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5"; // Novo import para integração com Express
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"; // Opcional: Para graceful shutdown
import http from "http"; // Para criar o servidor HTTP
import cors from "cors";

// Tipagens para context (ajuste conforme sua necessidade, ex: com user de JWT)
interface MyContext {
  req: Request; // Exemplo simples; adicione user, etc.
}

async function rodarServidor({
  typeDefs,
  resolvers,
}: {
  typeDefs: any;
  resolvers: any;
}) {
  const app = express();
  const httpServer = http.createServer(app); // Crie um servidor HTTP para o Apollo gerenciar shutdown

  // Middlewares necessários para parsing de body (obrigatório em v4+)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://studio.apollographql.com",
        "https://app.neofrota.com.br/",
        "https://neofrota.com.br/",
      ], // Ajuste para seu frontend e Apollo Studio
      credentials: true, // Se usar cookies/auth
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.options("*", cors());

  // Rota simples para o uptime robot
  app.get("/ping", (req: Request, res: Response) => {
    res.send("pong");
  });

  // Apollo integrado ao Express
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    persistedQueries: false,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // Opcional, mas recomendado para produção
  });
  await server.start();

  // Novo middleware: Substitui applyMiddleware
  app.use(
    "/graphql", // Caminho para o GraphQL (pode mudar, ex: server.graphqlPath não existe mais)
    expressMiddleware(server, {
      context: async ({ req }) => {
        // Lógica de context: Retorne dados como user de auth (ex: JWT)
        // Exemplo: const token = req.headers.authorization?.split(' ')[1];
        // Verifique token e retorne { user }
        return { req } as MyContext; // Tipado para TS
      },
    })
  );

  const PORT = 4000;
  await new Promise<void>((resolve) => httpServer.listen(PORT, resolve)); // Use httpServer para listen
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  console.log(`✅ Healthcheck em http://localhost:${PORT}/ping`);
}

export default rodarServidor;
