import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const PassageiroResolvers = {
  Query: {
    passageiros: async () => {
      return await prisma.passageiro.findMany({
        include: {
          viagens: true,
        },
      });
    },

    passageiro: async (_: any, { id }: { id: string }) => {
      return await prisma.passageiro.findUnique({
        where: { id: BigInt(id) },
        include: {
          viagens: true,
        },
      });
    },

    passageiroByEmail: async (_: any, { email }: { email: string }) => {
      return await prisma.passageiro.findUnique({
        where: { email },
        include: {
          viagens: true,
        },
      });
    },

    passageiroByMatricula: async (_: any, { matricula }: { matricula: string }) => {
      return await prisma.passageiro.findUnique({
        where: { matricula },
        include: {
          viagens: true,
        },
      });
    },

    passageirosByCentroCusto: async (_: any, { centroCustoClienteId }: { centroCustoClienteId: string }) => {
      return await prisma.passageiro.findMany({
        where: { centroCustoClienteId: BigInt(centroCustoClienteId) },
        include: {
          viagens: true,
        },
      });
    },
  },

  Mutation: {
    createPassageiro: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        centroCustoClienteId: input.centroCustoClienteId ? BigInt(input.centroCustoClienteId) : null,
      };

      return await prisma.passageiro.create({
        data,
        include: {
          viagens: true,
        },
      });
    },

    updatePassageiro: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        centroCustoClienteId: input.centroCustoClienteId ? BigInt(input.centroCustoClienteId) : undefined,
      };

      return await prisma.passageiro.update({
        where: { id: BigInt(id) },
        data,
        include: {
          viagens: true,
        },
      });
    },

    deletePassageiro: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.passageiro.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Passageiro: {
    id: (parent: any) => parent.id.toString(),
    centroCustoClienteId: (parent: any) => parent.centroCustoClienteId?.toString(),
  },
};

