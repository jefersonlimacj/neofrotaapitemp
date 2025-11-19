import { gql } from 'apollo-server-express';

export const CentroCustoClienteTypeDef = gql`
  type CentroCustoCliente {
    id: ID!
    nome: String!
    codigo: String
    empresaClienteId: ID
    operadoraId: ID
    descricao: String
    empresaCliente: EmpresaCliente
    operadora: Operadora
  }

  input CentroCustoClienteInput {
    nome: String!
    codigo: String
    empresaClienteId: ID
    operadoraId: ID
    descricao: String
  }

  input CentroCustoClienteUpdateInput {
    nome: String
    codigo: String
    empresaClienteId: ID
    operadoraId: ID
    descricao: String
  }

  extend type Query {
    centroCustoClientes: [CentroCustoCliente!]!
    centroCustoCliente(id: ID!): CentroCustoCliente
    centroCustoClientesByEmpresa(empresaClienteId: ID!): [CentroCustoCliente!]!
  }

  extend type Mutation {
    createCentroCustoCliente(input: CentroCustoClienteInput!): CentroCustoCliente!
    updateCentroCustoCliente(id: ID!, input: CentroCustoClienteUpdateInput!): CentroCustoCliente!
    deleteCentroCustoCliente(id: ID!): Boolean!
  }
`;

