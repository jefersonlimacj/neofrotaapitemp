import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const ModeloVoucherFixoResolvers = {
  Query: {
    modeloVoucherFixos: async () => {
      return await prisma.modeloVoucherFixo.findMany({
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    modeloVoucherFixo: async (_: any, { id }: { id: string }) => {
      return await prisma.modeloVoucherFixo.findUnique({
        where: { id: parseInt(id) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    modeloVoucherFixosByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.modeloVoucherFixo.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    modeloVoucherFixosByMotorista: async (_: any, { motoristaId }: { motoristaId: string }) => {
      return await prisma.modeloVoucherFixo.findMany({
        where: { motoristaId: BigInt(motoristaId) },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    modeloVoucherFixosAtivos: async () => {
      return await prisma.modeloVoucherFixo.findMany({
        where: { ativo: true },
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },
  },

  Mutation: {
    createModeloVoucherFixo: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        empresaClienteId: BigInt(input.empresaClienteId),
        motoristaId: BigInt(input.motoristaId),
        carroId: parseInt(input.carroId),
        adminUsuarioId: BigInt(input.adminUsuarioId),
        operadoraId: BigInt(input.operadoraId),
        dataInicio: new Date(input.dataInicio),
        dataFim: input.dataFim ? new Date(input.dataFim) : null,
        horario: new Date(`1970-01-01T${input.horario}`),
      };

      return await prisma.modeloVoucherFixo.create({
        data,
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    updateModeloVoucherFixo: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
        motoristaId: input.motoristaId ? BigInt(input.motoristaId) : undefined,
        carroId: input.carroId ? parseInt(input.carroId) : undefined,
        adminUsuarioId: input.adminUsuarioId ? BigInt(input.adminUsuarioId) : undefined,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
        dataInicio: input.dataInicio ? new Date(input.dataInicio) : undefined,
        dataFim: input.dataFim ? new Date(input.dataFim) : undefined,
        horario: input.horario ? new Date(`1970-01-01T${input.horario}`) : undefined,
      };

      return await prisma.modeloVoucherFixo.update({
        where: { id: parseInt(id) },
        data,
        include: {
          empresaCliente: true,
          motorista: true,
          carro: true,
          adminUsuario: true,
          operadora: true,
          vouchersGerados: true,
        },
      });
    },

    deleteModeloVoucherFixo: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.modeloVoucherFixo.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  ModeloVoucherFixo: {
    id: (parent: any) => parent.id.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId.toString(),
    motoristaId: (parent: any) => parent.motoristaId.toString(),
    carroId: (parent: any) => parent.carroId.toString(),
    adminUsuarioId: (parent: any) => parent.adminUsuarioId.toString(),
    operadoraId: (parent: any) => parent.operadoraId.toString(),
    dataInicio: (parent: any) => parent.dataInicio.toISOString(),
    dataFim: (parent: any) => parent.dataFim?.toISOString(),
    horario: (parent: any) => parent.horario.toISOString().split('T')[1].split('.')[0],
  },
};

