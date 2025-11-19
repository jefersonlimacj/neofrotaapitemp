import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const ModeloResolvers = {
  Query: {
    modelos: async () => {
      return await prisma.modelo.findMany({
        include: {
          marca: true,
        },
      });
    },

    modelo: async (_: any, { id }: { id: string }) => {
      return await prisma.modelo.findUnique({
        where: { id: parseInt(id) },
        include: {
          marca: true,
        },
      });
    },

    modeloByNome: async (_: any, { nome }: { nome: string }) => {
      return await prisma.modelo.findUnique({
        where: { nome },
        include: {
          marca: true,
        },
      });
    },

    modelosByMarca: async (_: any, { marcaId }: { marcaId: string }) => {
      return await prisma.modelo.findMany({
        where: { marcaId: parseInt(marcaId) },
        include: {
          marca: true,
        },
      });
    },
  },

  Mutation: {
    createModelo: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        marcaId: parseInt(input.marcaId),
      };

      return await prisma.modelo.create({
        data,
        include: {
          marca: true,
        },
      });
    },

    updateModelo: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        marcaId: input.marcaId ? parseInt(input.marcaId) : undefined,
      };

      return await prisma.modelo.update({
        where: { id: parseInt(id) },
        data,
        include: {
          marca: true,
        },
      });
    },

    deleteModelo: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.modelo.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Modelo: {
    id: (parent: any) => parent.id.toString(),
    marcaId: (parent: any) => parent.marcaId.toString(),
  },
};

