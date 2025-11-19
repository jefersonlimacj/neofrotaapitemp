import { gql } from 'apollo-server-express';

export const SolicitanteTypeDef = gql`
  enum FuncaoSolicitante {
    Gerente
    Supervisor
    Funcionario
    Admin
  }

  type Solicitante {
    id: ID!
    nome: String!
    email: String!
    senha: String!
    empresaClienteId: ID!
    funcao: FuncaoSolicitante!
    fotoUrlSolicitante: String
    statusSolicitante: Boolean!
    operadoraId: ID
    telefone: String
    empresaCliente: EmpresaCliente!
    operadora: Operadora
  }

  input SolicitanteInput {
    nome: String!
    email: String!
    senha: String!
    empresaClienteId: ID!
    funcao: FuncaoSolicitante!
    fotoUrlSolicitante: String
    statusSolicitante: Boolean
    operadoraId: ID
    telefone: String
  }

  input SolicitanteUpdateInput {
    nome: String
    email: String
    senha: String
    empresaClienteId: ID
    funcao: FuncaoSolicitante
    fotoUrlSolicitante: String
    statusSolicitante: Boolean
    operadoraId: ID
    telefone: String
  }

  extend type Query {
    solicitantes: [Solicitante!]!
    solicitante(id: ID!): Solicitante
    solicitanteByEmail(email: String!): Solicitante
    solicitantesByEmpresa(empresaClienteId: ID!): [Solicitante!]!
  }

  extend type Mutation {
    createSolicitante(input: SolicitanteInput!): Solicitante!
    updateSolicitante(id: ID!, input: SolicitanteUpdateInput!): Solicitante!
    deleteSolicitante(id: ID!): Boolean!
  }
`;

