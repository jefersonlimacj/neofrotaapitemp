import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const RotaResolvers = {
  Query: {
    rotas: async () => {
      return await prisma.rota.findMany({
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    rota: async (_: any, { id }: { id: string }) => {
      return await prisma.rota.findUnique({
        where: { id: parseInt(id) },
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    rotasByOperadora: async (_: any, { operadoraId }: { operadoraId: string }) => {
      return await prisma.rota.findMany({
        where: { operadoraId: BigInt(operadoraId) },
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    rotasByEmpresa: async (_: any, { empresaClienteId }: { empresaClienteId: string }) => {
      return await prisma.rota.findMany({
        where: { empresaClienteId: BigInt(empresaClienteId) },
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    rotasByOrigemDestino: async (_: any, { origem, destino }: { origem: string; destino: string }) => {
      return await prisma.rota.findMany({
        where: { 
          origem,
          destino 
        },
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },
  },

  Mutation: {
    createRota: async (_: any, { input }: { input: any }) => {
      const data = {
        ...input,
        operadoraId: BigInt(input.operadoraId),
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : null,
      };

      // Criar a rota primeiro
      const novaRota = await prisma.rota.create({
        data,
      });

      // Definir todas as categorias de carros
      const categorias = ['Sedan', 'MiniVan', 'Van', 'Micro', 'Onibus', 'Material'];

      // Criar um RotaValor para cada categoria com valores zerados
      const rotaValoresData = categorias.map(categoria => ({
        rotaId: novaRota.id,
        categoria: categoria as any,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : null,
        operadoraId: BigInt(input.operadoraId),
        valorViagem: 0,
        valorViagemRepasse: 0,
        valorHoraParada: 0,
        valorHoraParadaRepasse: 0,
        valorDeslocamento: 0,
        valorDeslocamentoRepasse: 0,
        valorPedagio: 0,
      }));

      // Criar todos os RotaValor em uma única operação
      await prisma.rotaValor.createMany({
        data: rotaValoresData,
      });

      // Retornar a rota com todos os relacionamentos
      return await prisma.rota.findUnique({
        where: { id: novaRota.id },
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    updateRota: async (_: any, { id, input }: { id: string; input: any }) => {
      const data = {
        ...input,
        operadoraId: input.operadoraId ? BigInt(input.operadoraId) : undefined,
        empresaClienteId: input.empresaClienteId ? BigInt(input.empresaClienteId) : undefined,
      };

      return await prisma.rota.update({
        where: { id: parseInt(id) },
        data,
        include: {
          rotaValor: true,
          vouchers: true,
          operadora: true,
          empresaCliente: true,
        },
      });
    },

    deleteRota: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.rota.delete({
          where: { id: parseInt(id) },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  Rota: {
    id: (parent: any) => parent.id.toString(),
    operadoraId: (parent: any) => parent.operadoraId.toString(),
    empresaClienteId: (parent: any) => parent.empresaClienteId?.toString(),
  },
};

