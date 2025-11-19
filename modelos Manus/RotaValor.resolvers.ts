import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const RotaValorResolvers = {
  Query: {
    rotaValores: async () => {
      return await prisma.rotaValor.findMany({
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    rotaValor: async (_: any, { id }: { id: string }) => {
      return await prisma.rotaValor.findUnique({
        where: { id: parseInt(id) },
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    rotaValoresByRota: async (_: any, { rotaId }: { rotaId: string }) => {
      return await prisma.rotaValor.findMany({
        where: { rotaId: parseInt(rotaId) },
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    rotaValoresByCategoria: async (_: any, { categoria }: { categoria: string }) => {
      return await prisma.rotaValor.findMany({
        where: { categoria: categoria as any },
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    rotaValoresByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.rotaValor.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createRotaValor: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        rotaId: parseInt(input.rotaId),
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : null,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.rotaValor.create({
        data,
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    updateRotaValor: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        rotaId: input.rotaId ? parseInt(input.rotaId) : undefined,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.rotaValor.update({
        where: { id: parseInt(id) },
        data,
        include: {
          rota: true,
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    deleteRotaValor: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.rotaValor.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  RotaValor: {
    id: (parent: any) => parent.id.toString(),
    rotaId: (parent: any) => parent.rotaId.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId?.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

