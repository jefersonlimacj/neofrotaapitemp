import { PrismaClient, Rota } from "../../generated/client";

const prisma = new PrismaClient();

export const modeloRotaResolvers = {
  Query: {
    rotas: () => prisma.rota.findMany(),
    rota: (_: any, { id }: { id: number }) =>
      prisma.rota.findUnique({ where: { id: Number(id) } }),
    rotaEmpresaClienteId: (_: any, { id }: { id: number }) =>
      prisma.rota.findMany({ where: { empresaClienteId: Number(id) } }),
  },

  Rota: {
    operadoraId: (obj: Rota) =>
      prisma.operadora.findUnique({ where: { id: obj.operadoraId } }),

    empresaClienteId: (obj: Rota) => {
      if (!obj.empresaClienteId) return null;
      return prisma.empresaCliente.findUnique({ where: { id: obj.empresaClienteId } });
    },

    rotaValor: (obj: Rota) =>
      prisma.rotaValor.findMany({ where: { rotaId: obj.id } }),
  },

  Mutation: {
     createRota: async (_: any, { input }: { input: any }) => {
      const data = {
        origem: input.origem,
        destino: input.destino,
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
        valorPedagio: null,
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

    updateRota: (_: any, { id, data }: { id: number; data: any }) =>
      prisma.rota.update({ where: { id: Number(id) }, data }),
    deleteRota: (_: any, { id }: { id: number }) =>
      prisma.rota.delete({ where: { id: Number(id) } }),
  },
};
