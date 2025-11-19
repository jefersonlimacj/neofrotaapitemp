import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const AdminUsuarioResolvers = {
  Query: {
    adminUsuarios: async () => {
      return await prisma.adminUsuario.findMany({
        include: {
          operadora: true,
          modeloVoucherFixo: true,
          voucher: true,
        },
      });
    },

    adminUsuario: async (_: any, { id }: { id: string }) => {
      return await prisma.adminUsuario.findUnique({
        where: { id: BigInt(id) },
        include: {
          operadora: true,
          modeloVoucherFixo: true,
          voucher: true,
        },
      });
    },

    adminUsuarioByEmail: async (_: any, { email }: { email: string }) => {
      return await prisma.adminUsuario.findUnique({
        where: { email },
        include: {
          operadora: true,
          modeloVoucherFixo: true,
          voucher: true,
        },
      });
    },
  },

  Mutation: {
    createAdminUsuario: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : null,
      };

      return await prisma.adminUsuario.create({
        data,
        include: {
          operadora: true,
          modeloVoucherFixo: true,
          voucher: true,
        },
      });
    },

    updateAdminUsuario: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.adminUsuario.update({
        where: { id: BigInt(id) },
        data,
        include: {
          operadora: true,
          modeloVoucherFixo: true,
          voucher: true,
        },
      });
    },

    deleteAdminUsuario: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.adminUsuario.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  AdminUsuario: {
    id: (parent: any) => parent.id.toString(),
    operadoraId: (parent: any) => parent.operadoraId?.toString(),
    dataCriacao: (parent: any) => parent.dataCriacao?.toISOString(),
  },
};

