import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const VoucherPassageiroResolvers = {
  Query: {
    voucherPassageiros: async () => {
      return await prisma.voucherPassageiro.findMany({
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    voucherPassageiro: async (_: any, { id }: { id: string }) => {
      return await prisma.voucherPassageiro.findUnique({
        where: { id: parseInt(id) },
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    voucherPassageirosByVoucher: async (_: any, { voucherId }: { voucherId: string }) => {
      return await prisma.voucherPassageiro.findMany({
        where: { voucherId: parseInt(voucherId) },
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    voucherPassageirosByPassageiro: async (_: any, { passageiroId }: { passageiroId: string }) => {
      return await prisma.voucherPassageiro.findMany({
        where: { passageiroId: BigInt(passageiroId) },
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    voucherPassageirosByStatus: async (_: any, { statusPresenca }: { statusPresenca: string }) => {
      return await prisma.voucherPassageiro.findMany({
        where: { statusPresenca: statusPresenca as any },
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },
  },

  Mutation: {
    createVoucherPassageiro: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        voucherId: parseInt(input.voucherId),
        passageiroId: BigInt(input.passageiroId),
        horarioEmbarqueReal: input.horarioEmbarqueReal ? new Date(input.horarioEmbarqueReal) : null,
      };

      return await prisma.voucherPassageiro.create({
        data,
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    updateVoucherPassageiro: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        voucherId: input.voucherId ? parseInt(input.voucherId) : undefined,
        passageiroId: input.passageiroId ? BigInt(input.passageiroId) : undefined,
        horarioEmbarqueReal: input.horarioEmbarqueReal ? new Date(input.horarioEmbarqueReal) : undefined,
      };

      return await prisma.voucherPassageiro.update({
        where: { id: parseInt(id) },
        data,
        include: {
          voucher: true,
          passageiro: true,
        },
      });
    },

    deleteVoucherPassageiro: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.voucherPassageiro.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  VoucherPassageiro: {
    id: (parent: any) => parent.id.toString(),
    voucherId: (parent: any) => parent.voucherId.toString(),
    passageiroId: (parent: any) => parent.passageiroId.toString(),
    horarioEmbarqueReal: (parent: any) => parent.horarioEmbarqueReal?.toISOString(),
  },
};

