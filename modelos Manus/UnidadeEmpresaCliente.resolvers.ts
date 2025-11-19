import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const UnidadeEmpresaClienteResolvers = {
  Query: {
    unidadeEmpresaClientes: async () => {
      return await prisma.unidadeEmpresaCliente.findMany({
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    unidadeEmpresaCliente: async (_: any, { id }: { id: string }) => {
      return await prisma.unidadeEmpresaCliente.findUnique({
        where: { id: BigInt(id) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    unidadeEmpresaClientesByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.unidadeEmpresaCliente.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    unidadeEmpresaClientesMatriz: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.unidadeEmpresaCliente.findMany({
        where: { 
          empresaClienteId: BigInt(empresaClienteId),
          matriz: true 
        },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createUnidadeEmpresaCliente: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : null,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.unidadeEmpresaCliente.create({
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    updateUnidadeEmpresaCliente: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.unidadeEmpresaCliente.update({
        where: { id: BigInt(id) },
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    deleteUnidadeEmpresaCliente: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.unidadeEmpresaCliente.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  UnidadeEmpresaCliente: {
    id: (parent: any) => parent.id.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId?.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

