// Export all type definitions
export { AdminUsuarioTypeDef } from './AdminUsuario.type';
export { CentroCustoClienteTypeDef } from './CentroCustoCliente.type';
export { EmpresaClienteTypeDef } from './EmpresaCliente.type';
export { MotoristaTypeDef } from './Motorista.type';
export { CarroTypeDef } from './Carro.type';
export { MarcaTypeDef } from './Marca.type';
export { ModeloTypeDef } from './Modelo.type';
export { OperadoraTypeDef } from './Operadora.type';
export { UnidadeEmpresaClienteTypeDef } from './UnidadeEmpresaCliente.type';
export { SolicitanteTypeDef } from './Solicitante.type';
export { PassageiroTypeDef } from './Passageiro.type';
export { RotaTypeDef } from './Rota.type';
export { PedagioTypeDef } from './Pedagio.type';
export { RotaValorTypeDef } from './RotaValor.type';
export { ModeloVoucherFixoTypeDef } from './ModeloVoucherFixo.type';
export { RelacaoAgrdFuncTypeDef } from './RelacaoAgrdFunc.type';
export { VoucherPassageiroTypeDef } from './VoucherPassageiro.type';
export { VoucherTypeDef } from './Voucher.type';

// Base Query and Mutation types
import { gql } from 'apollo-server-express';

export const BaseTypeDef = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

