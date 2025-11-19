import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const MotoristaResolvers = {
  Query: {
    motoristas: async () => {
      return await prisma.motorista.findMany({
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    motorista: async (_: any, { id }: { id: string }) => {
      return await prisma.motorista.findUnique({
        where: { id: BigInt(id) },
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    motoristaByEmail: async (_: any, { email }: { email: string }) => {
      return await prisma.motorista.findUnique({
        where: { email },
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    motoristasByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.motorista.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    motoristasByCpf: async (_: any, { cpf }: { cpf: string }) => {
      return await prisma.motorista.findFirst({
        where: { cpf },
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },
  },

  Mutation: {
    createMotorista: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
        vCnh: input.vCnh ? new Date(input.vCnh) : null,
      };

      return await prisma.motorista.create({
        data,
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    updateMotorista: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
        vCnh: input.vCnh ? new Date(input.vCnh) : undefined,
      };

      return await prisma.motorista.update({
        where: { id: BigInt(id) },
        data,
        include: {
          operadora: true,
          carro: true,
          modeloVoucherFixo: true,
          voucher: true,
          agregadoRelacao: true,
          funcionarioRelacao: true,
        },
      });
    },

    deleteMotorista: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.motorista.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Motorista: {
    id: (parent: any) => parent.id.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
    vCnh: (parent: any) => parent.vCnh?.toISOString(),
    dataCriacao: (parent: any) => parent.dataCriacao?.toISOString(),
  },
};

