import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const CarroResolvers = {
  Query: {
    carros: async () => {
      return await prisma.carro.findMany({
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    carro: async (_: any, { id }: { id: string }) => {
      return await prisma.carro.findUnique({
        where: { id: parseInt(id) },
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    carroByPlaca: async (_: any, { placa }: { placa: string }) => {
      return await prisma.carro.findUnique({
        where: { placa },
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    carrosByMotorista: async (_: any, { motoristaId }: { motoristaId: string }) => {
      return await prisma.carro.findMany({
        where: { motoristaId: BigInt(motoristaId) },
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    carrosByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.carro.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },
  },

  Mutation: {
    createCarro: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        agregadoId: input.agregadoId ? BigInt(input.agregadoId) : null,
        motoristaId: input.motoristaId ? BigInt(input.motoristaId) : null,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.carro.create({
        data,
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    updateCarro: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        agregadoId: input.agregadoId ? BigInt(input.agregadoId) : undefined,
        motoristaId: input.motoristaId ? BigInt(input.motoristaId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.carro.update({
        where: { id: parseInt(id) },
        data,
        include: {
          operadora: true,
          motorista: true,
          vouchers: true,
          modeloVoucherFixo: true,
        },
      });
    },

    deleteCarro: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.carro.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Carro: {
    id: (parent: any) => parent.id.toString(),
    agregadoId: (parent: any) => parent.agregadoId?.toString(),
    motoristaId: (parent: any) => parent.motoristaId?.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
  },
};

