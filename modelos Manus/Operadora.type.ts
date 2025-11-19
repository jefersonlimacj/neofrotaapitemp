import { gql } from 'apollo-server-express';

export const OperadoraTypeDef = gql`
  type Operadora {
    id: ID!
    nome: String!
    slug: String
    logoOperadora: String
    cnpj: String
    rSocial: String
    endRua: String
    endNumero: String
    endBairro: String
    endCep: String
    endCidade: String
    endUf: String
    statusOperadora: Boolean
    dataCriacao: String
    adminUsuario: [AdminUsuario!]!
    centroCustoCliente: [CentroCustoCliente!]!
    empresaCliente: [EmpresaCliente!]!
    motorista: [Motorista!]!
    solicitante: [Solicitante!]!
    unidadeEmpresaCliente: [UnidadeEmpresaCliente!]!
    rota: [Rota!]!
    rotaValor: [RotaValor!]!
    modeloVoucherFixo: [ModeloVoucherFixo!]!
    voucher: [Voucher!]!
    carro: [Carro!]!
    relacaoAgrdFunc: [RelacaoAgrdFunc!]!
    pedagio: [Pedagio!]!
  }

  input OperadoraInput {
    nome: String!
    slug: String
    logoOperadora: String
    cnpj: String
    rSocial: String
    endRua: String
    endNumero: String
    endBairro: String
    endCep: String
    endCidade: String
    endUf: String
    statusOperadora: Boolean
  }

  input OperadoraUpdateInput {
    nome: String
    slug: String
    logoOperadora: String
    cnpj: String
    rSocial: String
    endRua: String
    endNumero: String
    endBairro: String
    endCep: String
    endCidade: String
    endUf: String
    statusOperadora: Boolean
  }

  extend type Query {
    operadoras: [Operadora!]!
    operadora(id: ID!): Operadora
    operadoraBySlug(slug: String!): Operadora
    operadoraByCnpj(cnpj: String!): Operadora
  }

  extend type Mutation {
    createOperadora(input: OperadoraInput!): Operadora!
    updateOperadora(id: ID!, input: OperadoraUpdateInput!): Operadora!
    deleteOperadora(id: ID!): Boolean!
  }
`;

