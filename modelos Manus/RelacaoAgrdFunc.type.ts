import { gql } from 'apollo-server-express';

export const RelacaoAgrdFuncTypeDef = gql`
  type RelacaoAgrdFunc {
    id: ID!
    agregadoId: ID!
    funcionarioId: ID!
    operadoraId: ID
    motoristaComoAgregado: Motorista
    motoristaComoFuncionario: Motorista
    operadora: Operadora
  }

  input RelacaoAgrdFuncInput {
    agregadoId: ID!
    funcionarioId: ID!
    operadoraId: ID
  }

  input RelacaoAgrdFuncUpdateInput {
    agregadoId: ID
    funcionarioId: ID
    operadoraId: ID
  }

  extend type Query {
    relacaoAgrdFuncs: [RelacaoAgrdFunc!]!
    relacaoAgrdFunc(id: ID!): RelacaoAgrdFunc
    relacaoAgrdFuncsByAgregado(agregadoId: ID!): [RelacaoAgrdFunc!]!
    relacaoAgrdFuncsByFuncionario(funcionarioId: ID!): RelacaoAgrdFunc
    relacaoAgrdFuncsByOperadora(operadoraId: ID!): [RelacaoAgrdFunc!]!
  }

  extend type Mutation {
    createRelacaoAgrdFunc(input: RelacaoAgrdFuncInput!): RelacaoAgrdFunc!
    updateRelacaoAgrdFunc(id: ID!, input: RelacaoAgrdFuncUpdateInput!): RelacaoAgrdFunc!
    deleteRelacaoAgrdFunc(id: ID!): Boolean!
  }
`;

