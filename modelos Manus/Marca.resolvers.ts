import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const MarcaResolvers = {
  Query: {
    marcas: async () => {
      return await prisma.marca.findMany({
        include: {
          modelo: true,
        },
      });
    },

    marca: async (_: any, { id }: { id: string }) => {
      return await prisma.marca.findUnique({
        where: { id: parseInt(id) },
        include: {
          modelo: true,
        },
      });
    },

    marcaByNome: async (_: any, { nome }: { nome: string }) => {
      return await prisma.marca.findUnique({
        where: { nome },
        include: {
          modelo: true,
        },
      });
    },
  },

  Mutation: {
    createMarca: async (_: any, { input }: { input: any }) => {
      return await prisma.marca.create({
        data: input,
        include: {
          modelo: true,
        },
      });
    },

    updateMarca: async (_: any, { id, input }: { id: string; input: any }) => {
      return await prisma.marca.update({
        where: { id: parseInt(id) },
        data: input,
        include: {
          modelo: true,
        },
      });
    },

    deleteMarca: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.marca.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Marca: {
    id: (parent: any) => parent.id.toString(),
  },
};

