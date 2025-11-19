import { gql } from 'apollo-server-express';

export const MarcaTypeDef = gql`
  type Marca {
    id: ID!
    nome: String!
    modelo: [Modelo!]!
  }

  input MarcaInput {
    nome: String!
  }

  input MarcaUpdateInput {
    nome: String
  }

  extend type Query {
    marcas: [Marca!]!
    marca(id: ID!): Marca
    marcaByNome(nome: String!): Marca
  }

  extend type Mutation {
    createMarca(input: MarcaInput!): Marca!
    updateMarca(id: ID!, input: MarcaUpdateInput!): Marca!
    deleteMarca(id: ID!): Boolean!
  }
`;

