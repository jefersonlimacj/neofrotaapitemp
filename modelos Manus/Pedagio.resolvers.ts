import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const PedagioResolvers = {
  Query: {
    pedagios: async () => {
      return await prisma.pedagio.findMany({
        include: {
          operadora: true,
        },
      });
    },

    pedagio: async (_: any, { id }: { id: string }) => {
      return await prisma.pedagio.findUnique({
        where: { id: parseInt(id) },
        include: {
          operadora: true,
        },
      });
    },

    pedagiosByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.pedagio.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          operadora: true,
        },
      });
    },

    pedagioByNome: async (_: any, { nome }: { nome: string }) => {
      return await prisma.pedagio.findFirst({
        where: { nome },
        include: {
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createPedagio: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        operadoraId: BigInt(input.operadoraId),
      };

      return await prisma.pedagio.create({
        data,
        include: {
          operadora: true,
        },
      });
    },

    updatePedagio: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.pedagio.update({
        where: { id: parseInt(id) },
        data,
        include: {
          operadora: true,
        },
      });
    },

    deletePedagio: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.pedagio.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Pedagio: {
    id: (parent: any) => parent.id.toString(),
    operadoraId: (parent: any) => parent.operadoraId.toString(),
  },
};

