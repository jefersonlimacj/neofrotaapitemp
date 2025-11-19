import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const RelacaoAgrdFuncResolvers = {
  Query: {
    relacaoAgrdFuncs: async () => {
      return await prisma.relacaoAgrdFunc.findMany({
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    relacaoAgrdFunc: async (_: any, { id }: { id: string }) => {
      return await prisma.relacaoAgrdFunc.findUnique({
        where: { id: BigInt(id) },
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    relacaoAgrdFuncsByAgregado: async (_: any, { agregadoId }: { agregadoId: string }) => {
      return await prisma.relacaoAgrdFunc.findMany({
        where: { agregadoId: BigInt(agregadoId) },
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    relacaoAgrdFuncsByFuncionario: async (_: any, { funcionarioId }: { funcionarioId: string }) => {
      return await prisma.relacaoAgrdFunc.findUnique({
        where: { funcionarioId: BigInt(funcionarioId) },
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    relacaoAgrdFuncsByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.relacaoAgrdFunc.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },
  },

  Mutation: {
    createRelacaoAgrdFunc: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        agregadoId: BigInt(input.agregadoId),
        funcionarioId: BigInt(input.funcionarioId),
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.relacaoAgrdFunc.create({
        data,
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    updateRelacaoAgrdFunc: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        agregadoId: input.agregadoId ? BigInt(input.agregadoId) : undefined,
        funcionarioId: input.funcionarioId ? BigInt(input.funcionarioId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.relacaoAgrdFunc.update({
        where: { id: BigInt(id) },
        data,
        include: {
          motoristaComoAgregado: true,
          motoristaComoFuncionario: true,
          operadora: true,
        },
      });
    },

    deleteRelacaoAgrdFunc: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.relacaoAgrdFunc.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  RelacaoAgrdFunc: {
    id: (parent: any) => parent.id.toString(),
    agregadoId: (parent: any) => parent.agregadoId.toString(),
    funcionarioId: (parent: any) => parent.funcionarioId.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

