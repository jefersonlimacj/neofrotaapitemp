import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const EmpresaClienteResolvers = {
  Query: {
    empresaClientes: async () => {
      return await prisma.empresaCliente.findMany({
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },

    empresaCliente: async (_: any, { id }: { id: string }) => {
      return await prisma.empresaCliente.findUnique({
        where: { id: BigInt(id) },
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },

    empresaClientesByCnpj: async (_: any, { cnpj }: { cnpj: string }) => {
      return await prisma.empresaCliente.findFirst({
        where: { cnpj },
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },

    empresaClientesByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.empresaCliente.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },
  },

  Mutation: {
    createEmpresaCliente: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        operadoraId: BigInt(input.operadoraId),
      };

      return await prisma.empresaCliente.create({
        data,
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },

    updateEmpresaCliente: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
      };

      return await prisma.empresaCliente.update({
        where: { id: BigInt(id) },
        data,
        include: {
          centroCustoCliente: true,
          operadora: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          modeloVoucherFixo: true,
          voucher: true,
          rotaValor: true,
          rota: true,
        },
      });
    },

    deleteEmpresaCliente: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.empresaCliente.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  EmpresaCliente: {
    id: (parent: any) => parent.id.toString(),
    operadoraId: (parent: any) => parent.operadoraId.toString(),
  },
};

