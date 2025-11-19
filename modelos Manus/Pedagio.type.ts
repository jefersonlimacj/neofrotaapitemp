import { gql } from 'apollo-server-express';

export const PedagioTypeDef = gql`
  type Pedagio {
    id: ID!
    nome: String!
    valor: Float!
    operadoraId: ID!
    operadora: Operadora!
  }

  input PedagioInput {
    nome: String!
    valor: Float!
    operadoraId: ID!
  }

  input PedagioUpdateInput {
    nome: String
    valor: Float
    operadoraId: ID
  }

  extend type Query {
    pedagios: [Pedagio!]!
    pedagio(id: ID!): Pedagio
    pedagiosByOperadora(operadoraId: ID!): [Pedagio!]!
    pedagioByNome(nome: String!): Pedagio
  }

  extend type Mutation {
    createPedagio(input: PedagioInput!): Pedagio!
    updatePedagio(id: ID!, input: PedagioUpdateInput!): Pedagio!
    deletePedagio(id: ID!): Boolean!
  }
`;

