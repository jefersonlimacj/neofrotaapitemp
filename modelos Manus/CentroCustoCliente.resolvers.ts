import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const CentroCustoClienteResolvers = {
  Query: {
    centroCustoClientes: async () => {
      return await prisma.centroCustoCliente.findMany({
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    centroCustoCliente: async (_: any, { id }: { id: string }) => {
      return await prisma.centroCustoCliente.findUnique({
        where: { id: BigInt(id) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    centroCustoClientesByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.centroCustoCliente.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createCentroCustoCliente: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : null,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.centroCustoCliente.create({
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    updateCentroCustoCliente: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.centroCustoCliente.update({
        where: { id: BigInt(id) },
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    deleteCentroCustoCliente: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.centroCustoCliente.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  CentroCustoCliente: {
    id: (parent: any) => parent.id.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId?.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

