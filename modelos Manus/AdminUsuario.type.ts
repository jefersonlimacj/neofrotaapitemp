import { gql } from 'apollo-server-express';

export const AdminUsuarioTypeDef = gql`
  enum Funcao {
    Oper
    Admin
    SuperAdmin
  }

  type AdminUsuario {
    id: ID!
    operadoraId: ID
    nome: String
    email: String!
    senha: String
    fotoAdminOperadora: String
    statusAdminOperadora: Boolean
    dataCriacao: String
    funcao: Funcao
    operadora: Operadora
    modeloVoucherFixo: [ModeloVoucherFixo!]!
    voucher: [Voucher!]!
  }

  input AdminUsuarioInput {
    operadoraId: ID
    nome: String
    email: String!
    senha: String
    fotoAdminOperadora: String
    statusAdminOperadora: Boolean
    funcao: Funcao
  }

  input AdminUsuarioUpdateInput {
    operadoraId: ID
    nome: String
    email: String
    senha: String
    fotoAdminOperadora: String
    statusAdminOperadora: Boolean
    funcao: Funcao
  }

  extend type Query {
    adminUsuarios: [AdminUsuario!]!
    adminUsuario(id: ID!): AdminUsuario
    adminUsuarioByEmail(email: String!): AdminUsuario
  }

  extend type Mutation {
    createAdminUsuario(input: AdminUsuarioInput!): AdminUsuario!
    updateAdminUsuario(id: ID!, input: AdminUsuarioUpdateInput!): AdminUsuario!
    deleteAdminUsuario(id: ID!): Boolean!
  }
`;

