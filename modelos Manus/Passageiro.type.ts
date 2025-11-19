import { gql } from 'apollo-server-express';

export const PassageiroTypeDef = gql`
  type Passageiro {
    id: ID!
    nome: String!
    matricula: String
    telefone: String
    email: String
    ativo: Boolean!
    fotoPerfilPassageiro: String
    centroCustoClienteId: ID
    viagens: [VoucherPassageiro!]!
  }

  input PassageiroInput {
    nome: String!
    matricula: String
    telefone: String
    email: String
    ativo: Boolean
    fotoPerfilPassageiro: String
    centroCustoClienteId: ID
  }

  input PassageiroUpdateInput {
    nome: String
    matricula: String
    telefone: String
    email: String
    ativo: Boolean
    fotoPerfilPassageiro: String
    centroCustoClienteId: ID
  }

  extend type Query {
    passageiros: [Passageiro!]!
    passageiro(id: ID!): Passageiro
    passageiroByEmail(email: String!): Passageiro
    passageiroByMatricula(matricula: String!): Passageiro
    passageirosByCentroCusto(centroCustoClienteId: ID!): [Passageiro!]!
  }

  extend type Mutation {
    createPassageiro(input: PassageiroInput!): Passageiro!
    updatePassageiro(id: ID!, input: PassageiroUpdateInput!): Passageiro!
    deletePassageiro(id: ID!): Boolean!
  }
`;

