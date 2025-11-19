import { gql } from 'apollo-server-express';

export const ModeloTypeDef = gql`
  type Modelo {
    id: ID!
    nome: String!
    marcaId: ID!
    marca: Marca!
  }

  input ModeloInput {
    nome: String!
    marcaId: ID!
  }

  input ModeloUpdateInput {
    nome: String
    marcaId: ID
  }

  extend type Query {
    modelos: [Modelo!]!
    modelo(id: ID!): Modelo
    modeloByNome(nome: String!): Modelo
    modelosByMarca(marcaId: ID!): [Modelo!]!
  }

  extend type Mutation {
    createModelo(input: ModeloInput!): Modelo!
    updateModelo(id: ID!, input: ModeloUpdateInput!): Modelo!
    deleteModelo(id: ID!): Boolean!
  }
`;

