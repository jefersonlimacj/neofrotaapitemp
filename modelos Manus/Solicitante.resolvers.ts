import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const SolicitanteResolvers = {
  Query: {
    solicitantes: async () => {
      return await prisma.solicitante.findMany({
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    solicitante: async (_: any, { id }: { id: string }) => {
      return await prisma.solicitante.findUnique({
        where: { id: BigInt(id) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    solicitanteByEmail: async (_: any, { email }: { email: string }) => {
      return await prisma.solicitante.findUnique({
        where: { email },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    solicitantesByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.solicitante.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createSolicitante: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        empresaClienteId: BigInt(input.empresaClienteId),
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.solicitante.create({
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    updateSolicitante: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.solicitante.update({
        where: { id: BigInt(id) },
        data,
        include: {
          empresaCliente: true,
          operadora: true,
        },
      });
    },

    deleteSolicitante: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.solicitante.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Solicitante: {
    id: (parent: any) => parent.id.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

