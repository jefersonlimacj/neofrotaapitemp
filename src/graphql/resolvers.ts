import { mergeResolvers } from '@graphql-tools/merge';

// 1. Importar todos os arquivos de resolvers dos seus módulos
import { operadoraResolvers } from '../modulos/operadora/operadoras.resolvers';
import { adminUsuarioResolvers } from '../modulos/admin_usuario/admin_usuarios.resolvers';
import { motoristaResolvers } from '../modulos/motorista/motoristas.resolvers';
import { empresaClienteResolvers } from '../modulos/empresa_cliente/empresas_cliente.resolvers';
import { unidadeEmpresaClienteResolvers } from '../modulos/unidade_empresa_cliente/unidade_empresa_cliente.resolvers';
import { relacaoAgrdFuncResolvers } from '../modulos/relacao_agrd_func/relacao_agrd_func.resolvers';
import { solicitanteResolvers } from '../modulos/solicitante/solicitante.resolvers';
import { CentroCustoResolvers } from '../modulos/centro_custo/centro_custo.resolvers';
import { carroResolvers } from '../modulos/carro/carro.resolvers';
import { modeloVoucherFixoResolvers } from '../modulos/modelo_fixo/modelo_fixo.resolvers';
import { modeloRotaResolvers } from '../modulos/rota/rota.resolvers';
import { rotaValorResolvers } from '../modulos/rota_valor/rota_valor.resolvers';
import { voucherResolvers } from '../modulos/voucher/voucher.resolvers';
import { pedagioResolvers } from '../modulos/pedagio/pedagio.resolvers';
import { passageirosResolvers } from '../modulos/passageiros/passageiros.resolvers';

// 2. Colocar todos os resolvers em um array
const resolversArray = [
  operadoraResolvers,
  adminUsuarioResolvers,
  motoristaResolvers,
  empresaClienteResolvers,
  unidadeEmpresaClienteResolvers,
  relacaoAgrdFuncResolvers,
  solicitanteResolvers,
  CentroCustoResolvers,
  carroResolvers,
  modeloVoucherFixoResolvers,
  modeloRotaResolvers,
  rotaValorResolvers,
  voucherResolvers,
  pedagioResolvers,
  passageirosResolvers,
];

// 3. Exportar o resultado do merge
export const resolvers = mergeResolvers(resolversArray);