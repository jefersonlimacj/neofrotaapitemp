// Export all resolvers
export { AdminUsuarioResolvers } from './AdminUsuario.resolvers';
export { CentroCustoClienteResolvers } from './CentroCustoCliente.resolvers';
export { EmpresaClienteResolvers } from './EmpresaCliente.resolvers';
export { MotoristaResolvers } from './Motorista.resolvers';
export { CarroResolvers } from './Carro.resolvers';
export { MarcaResolvers } from './Marca.resolvers';
export { ModeloResolvers } from './Modelo.resolvers';
export { OperadoraResolvers } from './Operadora.resolvers';
export { UnidadeEmpresaClienteResolvers } from './UnidadeEmpresaCliente.resolvers';
export { SolicitanteResolvers } from './Solicitante.resolvers';
export { PassageiroResolvers } from './Passageiro.resolvers';
export { RotaResolvers } from './Rota.resolvers';
export { PedagioResolvers } from './Pedagio.resolvers';
export { RotaValorResolvers } from './RotaValor.resolvers';
export { ModeloVoucherFixoResolvers } from './ModeloVoucherFixo.resolvers';
export { RelacaoAgrdFuncResolvers } from './RelacaoAgrdFunc.resolvers';
export { VoucherPassageiroResolvers } from './VoucherPassageiro.resolvers';
export { VoucherResolvers } from './Voucher.resolvers';

// Merge all resolvers into a single object
import { AdminUsuarioResolvers } from './AdminUsuario.resolvers';
import { CentroCustoClienteResolvers } from './CentroCustoCliente.resolvers';
import { EmpresaClienteResolvers } from './EmpresaCliente.resolvers';
import { MotoristaResolvers } from './Motorista.resolvers';
import { CarroResolvers } from './Carro.resolvers';
import { MarcaResolvers } from './Marca.resolvers';
import { ModeloResolvers } from './Modelo.resolvers';
import { OperadoraResolvers } from './Operadora.resolvers';
import { UnidadeEmpresaClienteResolvers } from './UnidadeEmpresaCliente.resolvers';
import { SolicitanteResolvers } from './Solicitante.resolvers';
import { PassageiroResolvers } from './Passageiro.resolvers';
import { RotaResolvers } from './Rota.resolvers';
import { PedagioResolvers } from './Pedagio.resolvers';
import { RotaValorResolvers } from './RotaValor.resolvers';
import { ModeloVoucherFixoResolvers } from './ModeloVoucherFixo.resolvers';
import { RelacaoAgrdFuncResolvers } from './RelacaoAgrdFunc.resolvers';
import { VoucherPassageiroResolvers } from './VoucherPassageiro.resolvers';
import { VoucherResolvers } from './Voucher.resolvers';

export const resolvers = {
  Query: {
    ...AdminUsuarioResolvers.Query,
    ...CentroCustoClienteResolvers.Query,
    ...EmpresaClienteResolvers.Query,
    ...MotoristaResolvers.Query,
    ...CarroResolvers.Query,
    ...MarcaResolvers.Query,
    ...ModeloResolvers.Query,
    ...OperadoraResolvers.Query,
    ...UnidadeEmpresaClienteResolvers.Query,
    ...SolicitanteResolvers.Query,
    ...PassageiroResolvers.Query,
    ...RotaResolvers.Query,
    ...PedagioResolvers.Query,
    ...RotaValorResolvers.Query,
    ...ModeloVoucherFixoResolvers.Query,
    ...RelacaoAgrdFuncResolvers.Query,
    ...VoucherPassageiroResolvers.Query,
    ...VoucherResolvers.Query,
  },
  Mutation: {
    ...AdminUsuarioResolvers.Mutation,
    ...CentroCustoClienteResolvers.Mutation,
    ...EmpresaClienteResolvers.Mutation,
    ...MotoristaResolvers.Mutation,
    ...CarroResolvers.Mutation,
    ...MarcaResolvers.Mutation,
    ...ModeloResolvers.Mutation,
    ...OperadoraResolvers.Mutation,
    ...UnidadeEmpresaClienteResolvers.Mutation,
    ...SolicitanteResolvers.Mutation,
    ...PassageiroResolvers.Mutation,
    ...RotaResolvers.Mutation,
    ...PedagioResolvers.Mutation,
    ...RotaValorResolvers.Mutation,
    ...ModeloVoucherFixoResolvers.Mutation,
    ...RelacaoAgrdFuncResolvers.Mutation,
    ...VoucherPassageiroResolvers.Mutation,
    ...VoucherResolvers.Mutation,
  },
  // Field resolvers
  AdminUsuario: AdminUsuarioResolvers.AdminUsuario,
  CentroCustoCliente: CentroCustoClienteResolvers.CentroCustoCliente,
  EmpresaCliente: EmpresaClienteResolvers.EmpresaCliente,
  Motorista: MotoristaResolvers.Motorista,
  Carro: CarroResolvers.Carro,
  Marca: MarcaResolvers.Marca,
  Modelo: ModeloResolvers.Modelo,
  Operadora: OperadoraResolvers.Operadora,
  UnidadeEmpresaCliente: UnidadeEmpresaClienteResolvers.UnidadeEmpresaCliente,
  Solicitante: SolicitanteResolvers.Solicitante,
  Passageiro: PassageiroResolvers.Passageiro,
  Rota: RotaResolvers.Rota,
  Pedagio: PedagioResolvers.Pedagio,
  RotaValor: RotaValorResolvers.RotaValor,
  ModeloVoucherFixo: ModeloVoucherFixoResolvers.ModeloVoucherFixo,
  RelacaoAgrdFunc: RelacaoAgrdFuncResolvers.RelacaoAgrdFunc,
  VoucherPassageiro: VoucherPassageiroResolvers.VoucherPassageiro,
  Voucher: VoucherResolvers.Voucher,
};

