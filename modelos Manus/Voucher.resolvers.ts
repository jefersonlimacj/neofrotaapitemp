import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const VoucherResolvers = {
  Query: {
    vouchers: async () => {
      return await prisma.voucher.findMany({
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    voucher: async (_: any, { id }: { id: string }) => {
      return await prisma.voucher.findUnique({
        where: { id: parseInt(id) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    vouchersByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.voucher.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    vouchersByMotorista: async (_: any, { motoristaId }: { motoristaId: string }) => {
      return await prisma.voucher.findMany({
        where: { motoristaId: BigInt(motoristaId) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    vouchersByStatus: async (_: any, { status }: { status: string }) => {
      return await prisma.voucher.findMany({
        where: { status: status as any },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    vouchersByData: async (_: any, { dataInicio, dataFim }: { dataInicio: string; dataFim: string }) => {
      return await prisma.voucher.findMany({
        where: {
          dataHoraProgramado: {
            gte: new Date(dataInicio),
            lte: new Date(dataFim),
          },
        },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    vouchersByNatureza: async (_: any, { natureza }: { natureza: string }) => {
      return await prisma.voucher.findMany({
        where: { natureza: natureza as any },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },
  },

  Mutation: {
    createVoucher: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        empresaClienteId: BigInt(input.empresaClienteId),
        motoristaId: BigInt(input.motoristaId),
        carroId: parseInt(input.carroId),
        adminUsuarioId: BigInt(input.adminUsuarioId),
        operadoraId: BigInt(input.operadoraId),
        rotaId: input.rotaId ? parseInt(input.rotaId) : null,
        modeloVoucherFixoId: input.modeloVoucherFixoId ? parseInt(input.modeloVoucherFixoId) : null,
        dataHoraProgramado: new Date(input.dataHoraProgramado),
        dataHoraConclusao: input.dataHoraConclusao ? new Date(input.dataHoraConclusao) : null,
      };

      return await prisma.voucher.create({
        data,
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    updateVoucher: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        motoristaId: input.motoristaId ? BigInt(input.motoristaId) : undefined,
        carroId: input.carroId ? parseInt(input.carroId) : undefined,
        adminUsuarioId: input.adminUsuarioId ? BigInt(input.adminUsuarioId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
        rotaId: input.rotaId ? parseInt(input.rotaId) : undefined,
        modeloVoucherFixoId: input.modeloVoucherFixoId ? parseInt(input.modeloVoucherFixoId) : undefined,
        dataHoraProgramado: input.dataHoraProgramado ? new Date(input.dataHoraProgramado) : undefined,
        dataHoraConclusao: input.dataHoraConclusao ? new Date(input.dataHoraConclusao) : undefined,
      };

      return await prisma.voucher.update({
        where: { id: parseInt(id) },
        data,
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          rota: true,
          modeloVoucherFixo: true,
          passageiros: true,
        },
      });
    },

    deleteVoucher: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.voucher.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Voucher: {
    id: (parent: any) => parent.id.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId.toString(),
    motoristaId: (parent: any) => parent.motoristaId.toString(),
    carroId: (parent: any) => parent.carroId.toString(),
    adminUsuarioId: (parent: any) => parent.adminUsuarioId.toString(),
    operadoraId: (parent: any) => parent.operadoraId.toString(),
    rotaId: (parent: any) => parent.rotaId?.toString(),
    modeloVoucherFixoId: (parent: any) => parent.modeloVoucherFixoId?.toString(),
    dataHoraProgramado: (parent: any) => parent.dataHoraProgramado.toISOString(),
    dataHoraConclusao: (parent: any) => parent.dataHoraConclusao?.toISOString(),
    dataHoraCriacao: (parent: any) => parent.dataHoraCriacao.toISOString(),
  },
};

