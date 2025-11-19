import { gql } from 'apollo-server-express';

export const EmpresaClienteTypeDef = gql`
  type EmpresaCliente {
    id: ID!
    rSocial: String!
    nome: String
    cnpj: String
    fotoLogoCliente: String
    operadoraId: ID!
    statusCliente: Boolean
    centroCustoCliente: [CentroCustoCliente!]!
    operadora: Operadora!
    solicitante: [Solicitante!]!
    unidadeEmpresaCliente: [UnidadeEmpresaCliente!]!
    modeloVoucherFixo: [ModeloVoucherFixo!]!
    voucher: [Voucher!]!
    rotaValor: [RotaValor!]!
    rota: [Rota!]!
  }

  input EmpresaClienteInput {
    rSocial: String!
    nome: String
    cnpj: String
    fotoLogoCliente: String
    operadoraId: ID!
    statusCliente: Boolean
  }

  input EmpresaClienteUpdateInput {
    rSocial: String
    nome: String
    cnpj: String
    fotoLogoCliente: String
    operadoraId: ID
    statusCliente: Boolean
  }

  extend type Query {
    empresaClientes: [EmpresaCliente!]!
    empresaCliente(id: ID!): EmpresaCliente
    empresaClientesByCnpj(cnpj: String!): EmpresaCliente
    empresaClientesByOperadora(operadoraId: ID!): [EmpresaCliente!]!
  }

  extend type Mutation {
    createEmpresaCliente(input: EmpresaClienteInput!): EmpresaCliente!
    updateEmpresaCliente(id: ID!, input: EmpresaClienteUpdateInput!): EmpresaCliente!
    deleteEmpresaCliente(id: ID!): Boolean!
  }
`;

