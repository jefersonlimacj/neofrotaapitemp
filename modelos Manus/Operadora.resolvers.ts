import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const OperadoraResolvers = {
  Query: {
    operadoras: async () => {
      return await prisma.operadora.findMany({
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },

    operadora: async (_: any, { id }: { id: string }) => {
      return await prisma.operadora.findUnique({
        where: { id: BigInt(id) },
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },

    operadoraBySlug: async (_: any, { slug }: { slug: string }) => {
      return await prisma.operadora.findUnique({
        where: { slug },
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },

    operadoraByCnpj: async (_: any, { cnpj }: { cnpj: string }) => {
      return await prisma.operadora.findFirst({
        where: { cnpj },
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },
  },

  Mutation: {
    createOperadora: async (_: any, { input }: { input: any }) => {
      return await prisma.operadora.create({
        data: input,
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },

    updateOperadora: async (_: any, { id, input }: { id: string; input: any }) => {
      return await prisma.operadora.update({
        where: { id: BigInt(id) },
        data: input,
        include: {
          adminUsuario: true,
          centroCustoCliente: true,
          empresaCliente: true,
          motorista: true,
          solicitante: true,
          unidadeEmpresaCliente: true,
          rota: true,
          rotaValor: true,
          modeloVoucherFixo: true,
          voucher: true,
          carro: true,
          relacaoAgrdFunc: true,
          pedagio: true,
        },
      });
    },

    deleteOperadora: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.operadora.delete({
          where: { id: BigInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Operadora: {
    id: (parent: any) => parent.id.toString(),
    dataCriacao: (parent: any) => parent.dataCriacao?.toISOString(),
  },
};

