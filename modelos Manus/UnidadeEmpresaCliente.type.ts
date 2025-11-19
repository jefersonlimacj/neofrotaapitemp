import { gql } from 'apollo-server-express';

export const UnidadeEmpresaClienteTypeDef = gql`
  type UnidadeEmpresaCliente {
    id: ID!
    nome: String!
    cnpj: String
    endRua: String
    endNumero: String
    endBairro: String
    endCidade: String
    endCep: String
    endComplemento: String
    endUf: String
    empresaClienteId: ID
    operadoraId: ID
    statusUnidadeCliente: Boolean!
    matriz: Boolean!
    empresaCliente: EmpresaCliente
    operadora: Operadora
  }

  input UnidadeEmpresaClienteInput {
    nome: String!
    cnpj: String
    endRua: String
    endNumero: String
    endBairro: String
    endCidade: String
    endCep: String
    endComplemento: String
    endUf: String
    empresaClienteId: ID
    operadoraId: ID
    statusUnidadeCliente: Boolean
    matriz: Boolean
  }

  input UnidadeEmpresaClienteUpdateInput {
    nome: String
    cnpj: String
    endRua: String
    endNumero: String
    endBairro: String
    endCidade: String
    endCep: String
    endComplemento: String
    endUf: String
    empresaClienteId: ID
    operadoraId: ID
    statusUnidadeCliente: Boolean
    matriz: Boolean
  }

  extend type Query {
    unidadeEmpresaClientes: [UnidadeEmpresaCliente!]!
    unidadeEmpresaCliente(id: ID!): UnidadeEmpresaCliente
    unidadeEmpresaClientesByEmpresa(empresaClienteId: ID!): [UnidadeEmpresaCliente!]!
    unidadeEmpresaClientesMatriz(empresaClienteId: ID!): [UnidadeEmpresaCliente!]!
  }

  extend type Mutation {
    createUnidadeEmpresaCliente(input: UnidadeEmpresaClienteInput!): UnidadeEmpresaCliente!
    updateUnidadeEmpresaCliente(id: ID!, input: UnidadeEmpresaClienteUpdateInput!): UnidadeEmpresaCliente!
    deleteUnidadeEmpresaCliente(id: ID!): Boolean!
  }
`;

